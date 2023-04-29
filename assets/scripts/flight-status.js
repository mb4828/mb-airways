'use strict';

var CODE;
var MAP;
var MARKERS;

function getTime(tm, code, locale=luxon.DateTime.TIME_SIMPLE) {
	const airport = AIRPORTS.get(code);
	return luxon.DateTime.fromJSDate(tm).setZone(airport.tz).toLocaleString(locale);
}

function getAirportName(code) {
	return AIRPORTS.get(code)['name'];
}

function getArrivals(code) {
    const now = new Date();
    const maxArr = luxon.DateTime.now().plus(luxon.Duration.fromObject({hours: 2})); // arriving in the next 2 hours
    const minArr = luxon.DateTime.now().minus(luxon.Duration.fromObject({hours: .5})); // arrived .5 hour ago or less
    const arrivals = FLIGHTS
        .filter(f => f.d === code && f.at < maxArr && f.at > minArr)
        .sort((f1, f2) => f1.flight < f2.flight ? -1 : 1)
        .filter((f, idx, arr) => f.flight !== arr[idx-1]?.flight)
        .map(f => {
            if (f.at < now) {
                f['status'] = 'Arrived';
            } else if (f.dt > now) {
                f['status'] = 'Scheduled';
            } else {
                f['status'] = 'In Air';
            }
            return f;
        })
        .sort((f1, f2) => f1.at < f2.at ? -1 : 1);
    return arrivals;
}

function getDepartures(code) {
    const now = new Date();
    const nowPlus5 = luxon.DateTime.now().plus(luxon.Duration.fromObject({minutes: 5}));
    const nowPlus20 = luxon.DateTime.now().plus(luxon.Duration.fromObject({minutes: 20}));
    const maxDep = luxon.DateTime.now().plus(luxon.Duration.fromObject({hours: 2})); // departing in the next 2 hours
    const minDep = luxon.DateTime.now().minus(luxon.Duration.fromObject({hours: .5})); // departed .5 hour ago or less
    const departures = FLIGHTS
        .filter(f => f.o === code && f.dt < maxDep && f.dt > minDep)
        .sort((f1, f2) => f1.flight < f2.flight ? -1 : 1)
        .filter((f, idx, arr) => f.flight !== arr[idx-1]?.flight)
        .map(f => {
            if (f.dt < now) {
                f['status'] = 'Departed';
            } else if (f.dt < nowPlus5) {
                f['status'] = 'Last Call';
            } else if (f.dt < nowPlus20) {
                f['status'] = 'Boarding';
            } else {
                f['status'] = 'Scheduled'
            }
            return f;
        })
        .sort((f1, f2) => f1.dt < f2.dt ? -1 : 1)
    return departures;
}

function getAircraftPos(flight) {
    const originPos = AIRPORTS.get(flight.o).pos;
    const destPos = AIRPORTS.get(flight.d).pos;
    const timeLeft = Math.abs(luxon.DateTime.fromJSDate(flight.at).diffNow().toMillis());
    const timeTotal = luxon.DateTime.fromJSDate(flight.at).diff(luxon.DateTime.fromJSDate(flight.dt)).toMillis();
    const pct =  (timeTotal - timeLeft) / timeTotal; 
    let line = L.geodesic([originPos, destPos], {steps: 8}).getLatLngs();
    line = line[line.length-1];

    if (pct < 0 || line[line.length-1].lat !== destPos[0]) {
        return [null, null]; // flight hasn't taken off yet or line was calculated wrong
    }

    const step = Math.floor(line.length * pct);
    let angle = 90;
    if (step > 0 && step < line.length-1) {
        angle = Math.atan2(line[step+1].lng - line[step-1].lng, line[step+1].lat - line[step-1].lat) * 180 / Math.PI;
    }
    return [line[step], angle];
}

function getAircraftIcon(type) {
    if (type.includes('747')) {
        return 'assets/images/747.png'
    } else if (type.includes('777') || type.includes('787')) {
        return 'assets/images/WB.png';
    } else if (type.includes('757') || type.includes('737') || type.includes('A3')) {
        return 'assets/images/NB.png'
    } else if (type.includes('ERJ')) {
        return 'assets/images/E175.png';
    } else if (type.includes('717')) {
        return 'assets/images/717.png'
    } else {
        return 'assets/images/Q400.png'
    }
}

function updateUIMap(prevId, id, arrivals, departures) {
    const bounds = L.latLngBounds(L.latLng(-60, -177), L.latLng(80, 195)); // cutoff intl date line
    const points = [];
	if (!MAP) {
        MAP = L.map('flight-map', { scrollWheelZoom: false, minZoom: 2, maxBounds: bounds, maxBoundsViscosity: 1 });
        MARKERS = L.layerGroup().addTo(MAP);
	} else {
        MARKERS.clearLayers();
    }

	// map imagery
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 8,
	    id: 'mapbox/outdoors-v11',
	    tileSize: 512,
	    zoomOffset: -1,
	    accessToken: 'pk.eyJ1IjoibWI0ODI4IiwiYSI6ImNsMnFweGpuYTAwNXAzY3Bob3lqaG9rMG4ifQ.O8yYprih5CDw3tH0bDrCHw'
	}).addTo(MAP);

    // airport
    const airportPos = AIRPORTS.get(id).pos;
    L.marker(airportPos, {icon: L.icon({iconUrl: 'assets/images/tower.png', iconSize: [30,30]})}).addTo(MARKERS);
    points.push(airportPos);


    // aircraft
    const now = new Date();
    const flights = [].concat(arrivals, departures).filter(f => (f.d === id && f.at >= now) || (f.o === id && f.dt <= now));
    for (const flight of flights) {
        const [pos, angle] = getAircraftPos(flight);
        if (!pos || !angle) {
            continue;
        }
        const marker = L.marker(pos, {icon: L.divIcon(
            { html: `<img class='plane-icon' src='${getAircraftIcon(flight.type)}' data-angle='${angle}' title='MB${flight.flight}: ${flight.o} - ${flight.d} | ${flight.type}'>` }
        )});
        marker.addTo(MARKERS);
        points.push(pos);
    }

    // set view
    if (prevId !== id) {
        MAP.fitBounds(points, {maxZoom: 7});
    }

    $('.ui-tooltip').remove();
    $('.plane-icon').each(function() {
        const angle = $(this).data('angle');
        const tooltip = $(this).data('tooltip');

        // rotate planes
        $(this).css('rotate', `${angle}deg`);

        // tooltip
        $(this).tooltip();
    });
}

function updateUITable(id, data) {
    const isArr = id.includes('arrivals');
    const now = new Date();
    $(`${id} tbody`).empty();
    $(`${id} tbody`).append(data.map((d, idx) => {
        const tm = isArr ? d.at : d.dt;
        const nextTm = data.length > idx+1 ? isArr ? data[idx+1].at : data[idx+1].dt : null;
        const code = isArr ? d.d : d.o;
        const isAloha = ['717-200','Q-400'].includes(d.type)
        return `
            <tr>
                <td><img src="assets/images/logos/${isAloha ? 'aloha-tail' : 'mb-tail'}.png">${d.flight}</td>
                <td>${d.type}</td>
                <td title="${getAirportName(isArr ? d.o : d.d)}">${isArr ? d.o : d.d}</td>
                <td>${d.status}</td>
                <td>${getTime(tm, code)}</td>
            </tr>
        `;
    }).join(''));
}

function updateUI(code) {
    const arrivals = getArrivals(code);
    const departures = getDepartures(code);
    updateUITable('#arrivals', arrivals);
    updateUITable('#departures', departures);
    updateUIMap(CODE, code, arrivals, departures);
    CODE = code;
}

function updateTime() {
    const time = getTime(new Date(), CODE, luxon.DateTime.TIME_WITH_SECONDS);
    $('#status-time').val(time)
}

function setupForm() {
    const airports = [];
    for (const a of AIRPORTS.keys()) {
        airports.push(`<option value="${a}">${AIRPORTS.get(a).name}</option>`);
    }
    const el = $('#status-airport');
    el.append(airports);
    el.change(() => updateUI(el.val()));
}

(function init() {
    setupForm();

	updateUI('EWR');
    setInterval(() => updateUI(CODE), 15 * 1000);

    updateTime();
    setInterval(() => updateTime(), 1000);
}());