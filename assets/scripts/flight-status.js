'use strict';

var CODE = 'EWR';

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

function setupForm() {
    const airports = [];
    for (const a of AIRPORTS.keys()) {
        airports.push(`<option value="${a}">${AIRPORTS.get(a).name}</option>`);
    }
    const el = $('#status-airport');
    el.append(airports);
    el.change(() => updateUI(el.val()));
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
            ${tm < now && nextTm > now && nextTm !== tm ? `<tr class="now"><td colspan="5"><Time></Time></td></tr>` : ''}
        `;
    }).join(''));
}

function updateUI(code) {
    CODE = code;
    const arrivals = getArrivals(CODE);
    const departures = getDepartures(CODE);
    updateUITable('#arrivals', arrivals);
    updateUITable('#departures', departures);
}

function updateTime() {
    const time = getTime(new Date(), CODE, luxon.DateTime.TIME_WITH_SECONDS);
    $('#status-time').val(time)
    $('Time').text(time);
}

(function init() {
    setupForm();

	updateUI(CODE);
    setInterval(() => updateUI(CODE), 60 * 1000);

    updateTime();
    setInterval(() => updateTime(), 1000);
}());