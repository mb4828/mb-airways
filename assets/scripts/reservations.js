'use strict';

var AIRPORTS = new Map();
var SCHEDULE = [];

// helper methods

function getTime(tm, code) {
	const airport = AIRPORTS.get(code);
	return luxon.DateTime.fromJSDate(tm).setZone(airport.tz).toLocaleString(luxon.DateTime.TIME_SIMPLE);
}

function getTodayTime(tm, code) {
	const airport = AIRPORTS.get(code);
	const now = luxon.DateTime.now().setZone(airport.tz);
	return luxon.DateTime.fromJSDate(tm).setZone(airport.tz).set({year: now.year, month: now.month, day: now.day});
}

function getDuration(dep, arr) {
	const d = luxon.DateTime.fromJSDate(dep);
	const a = luxon.DateTime.fromJSDate(arr);
	return a.diff(d).shiftTo('hours','minutes').normalize().toHuman({ unitDisplay: "short" });
}

function getAirportCity(code) {
	const airport = AIRPORTS.get(code);
	if (airport) {
		return airport['city'];
	}
	console.error('Missing city for ' + code);
	return '';
}

function getAirportName(code) {
	return AIRPORTS.get(code)['name'];
}

function isHub(code) {
	const airport = AIRPORTS.get(code);
	return airport ? !!airport['isHub'] : false;
}

function isUSA(code) {
	const airport = AIRPORTS.get(code);
	return airport ? airport['city'].includes('USA') : false;
}

// ui control

function setupForm() {
	// from/to
	const destinations = new Set();
	for (const s of SCHEDULE) {
		destinations.add(s['o']);
		destinations.add(s['d']);
	}
	const destList = Array.from(destinations).filter(a => !!getAirportCity(a)).sort((a,b) => getAirportCity(a) < getAirportCity(b) ? -1 : 1);
	for (const d of destList) {
		const city = getAirportCity(d);
		$('#booking-from').append(`<option value="${d}">${city}</option>`);
		$('#booking-to').append(`<option value="${d}">${city}</option>`);
	}

	// swap
	const f = $('#booking-from');
	const t = $('#booking-to');
	const s = $('#booking-swap')
	s.click(() => {
		const temp = f.val();
		f.val(t.val());
		t.val(temp);
	});

	// depart/return
	const d = $('#booking-depart');
	const r = $('#booking-return');
	const now = luxon.DateTime.now();

	d.min = r.min = now.toFormat('yyyy-MM-dd');
	d.change(() => {
		r.min = d.value;
		if (r.value < d.value) {
			r.value = d.value;
		}
	});

	// set depart/return dates to sensible values
	d.val(now.toFormat('yyyy-MM-dd'));
	r.val(now.plus({days: 5}).toFormat('yyyy-MM-dd'));
}

function showLoading() {
	const results = $('#search-results');
	results.empty();
	results.append('<div class="loading"><i class="fa-solid fa-circle-notch fa-spin fa-3x"></i></div>');
}

function hideAllTrips() {
	$('.trip-details').hide(0);
}

function toggleTrip(id) {
	if ($(`#trip-header-${id} .fa-chevron-up.flip-me`).length > 0) {
		$(`#trip-header-${id} .fa-chevron-up.flip-me`).removeClass('flip-me')
	} else {
		$(`#trip-header-${id} .fa-chevron-up`).addClass('flip-me');
	}
	$(`#trip-details-${id}`).toggle(400);
}

function displayFlights(flights) {
	const results = $('#search-results');
	results.empty();
	let id = 0;
	for (const f of flights) {
		const last = f.length-1;
		const wrapper = $('<div class="trip-wrapper">');
		wrapper.append(`<div class="trip-header" id="trip-header-${id}" onclick="toggleTrip('${id}')">
							<strong style="flex-grow:1">${getTime(f[0]['dt'], f[0]['o'])} &ndash; ${getTime(f[last]['at'], f[last]['d'])}</strong>
							<span style="flex-basis:250px"><i class="fas fa-fw fa-stopwatch"></i> ${getDuration(f[0]['dt'], f[last]['at'])}</span>
							<span style="flex-basis:200px">
								${f.length === 1 ? '<span style="color: var(--accent-color)"><i class="fas fa-fw fa-map-marker-alt"></i> Nonstop</span>' :
								  f.length === 2 ? `<i class="fas fa-fw fa-map-marker-alt"></i> 1 stop <small>${f[0]['d']}</small>` :
								  `<i class="fas fa-fw fa-map-marker-alt"></i> ${f.length-1} stops <small>${f[0]['d']}, ${f[1]['d']}</small>` }
							</span>
							<i class="fas fa-chevron-up"></i>
						</div>`);
		const details = $(`<div class="trip-details" id="trip-details-${id}">`);
		for (let i=0; i < f.length; i++) {
			const s = f[i];
			details.append(`<ul>
								<li><span class="fa-stack fa-1x">
								    	<i class="fas fa-circle fa-stack-2x"></i>
								    	<i class="fas fa-plane-departure fa-stack-1x fa-inverse"></i>
								  	</span>
									<span>${getTime(s.dt, s.o)} &bull; ${getAirportName(s.o)}<br><small>Flight time: ${getDuration(s['dt'],s['at'])}</small></span></li>
								<li><span class="fa-stack fa-1x">
								    	<i class="fas fa-circle fa-stack-2x"></i>
								    	<i class="fas fa-plane-arrival fa-stack-1x fa-inverse"></i>
								  	</span>
								  	<span>${getTime(s.at, s.d)} &bull; ${getAirportName(s.d)}<br><small>Flight MBA ${s.flight} &bull; ${s.type}</small></span></li>
							</ul>`);
			if (i !== last) {
				details.append(`<div class="trip-layover">${getDuration(s.at, f[i+1].dt)} layover &bull; ${s.d}</div>`);
			}
		}
		wrapper.append(details);
		results.append(wrapper);
		id++;
	}
	hideAllTrips();
}

// data processing

function searchFlights() {
	showLoading();
	setTimeout(() => {
		const origin = $('#booking-from :selected').val();
		const dest = $('#booking-to :selected').val();
		const foundFlights = new Set();
		const flights = [];
		for (const f1 of SCHEDULE) {
			if (f1['o'] === origin) {
				// non-stop
				if (f1['d'] === dest && !foundFlights.has(f1.flight)) {
					flights.push([f1]);
					foundFlights.add(f1.flight);
				}
				
				for (const f2 of SCHEDULE) {
					if (f1['d'] === f2['o'] && luxon.DateTime.fromJSDate(f1['at']).plus(luxon.Duration.fromObject({minutes: 15})) < f2['dt']) { // at least 15 min layover
						// 1 stop
						if (f2['d'] === dest && !foundFlights.has(f1.flight)) {
							flights.push([f1, f2]);
							foundFlights.add(f1.flight);
						}

						// 2 stops
						for (const f3 of SCHEDULE) {
							if ((!isUSA(f1['o']) || !isUSA(f3['d'])) && // 2 stops only allowed for intl destinations
								 isHub(f1['d']) && isHub(f2['d']) && // connections only allowed through hubs
								 new Set([f1.o, f2.o, f3.o, f1.d, f2.d, f3.d]).size === 4 && // no repeat cities (sanity check)
								 f2['d'] === f3['o'] && luxon.DateTime.fromJSDate(f2['at']).plus(luxon.Duration.fromObject({minutes: 15})) < f3['dt'] && !foundFlights.has(f1.flight) && f3['d'] === dest) {
									flights.push([f1, f2, f3]);
									foundFlights.add(f1.flight);
							}
						}
					}
				}
			}
		}
		flights.sort((a,b) => getTodayTime(a[0].dt, a[0].o) < getTodayTime(b[0].dt, b[0].o) ? -1 : 1);
		setTimeout(() => displayFlights(flights), 500);
	});
}

function setupAirports() {
	for (const d of DESTINATIONS) {
		const codeIdx = d['name'].indexOf('(')+1;
		const code = d['name'].slice(codeIdx, codeIdx+3);
		AIRPORTS.set(code, d);
	}
}

function setupSchedule(rawSchedule) {
	for (let i=1; i < rawSchedule.length; i++) {
		const r = rawSchedule[i];
		const origin = r['Route'].slice(0,3);
		const dest = r['Route'].slice(-3);
		const tpe = r['Type'];

		let arr = luxon.DateTime.fromFormat(r['Arrival'], 'H:mm', {zone: 'utc'});
		let dep = luxon.DateTime.fromFormat(r['Departure'], 'H:mm', {zone: 'utc'});
		let dur = arr.diff(dep);
		if (arr < dep) {
			// make sure flights don't arrive before they depart
			arr = arr.plus(luxon.Duration.fromObject({day: 1})); 
			dur = arr.diff(dep);
		}
		if (['747-400','777-300','787-10'].includes(tpe) && dur.toMillis() <= 21600000) {
			// make sure ultra-long-haul flights have correct duration
			arr = arr.plus(luxon.Duration.fromObject({day: 1}));
			dur = arr.diff(dep);
		}
		const halfDur = dur.toMillis()/2;
		const midpoint = dep.plus(luxon.Duration.fromObject({milliseconds: halfDur}));

		SCHEDULE.push(new Object({
			'o': origin,
			'd': dest,
			'at': midpoint.minus(luxon.Duration.fromObject({minutes: 20})).toJSDate(),
			'dt': dep.toJSDate(),
			'flight': i*2,
			'type': tpe,
		}));
		SCHEDULE.push(new Object({
			'o': dest,
			'd': origin,
			'at': arr.minus(luxon.Duration.fromObject({minutes: 20})).toJSDate(),
			'dt': midpoint.toJSDate(),
			'flight': (i*2)+1,
			'type': tpe,
		}));
	}
	setupForm();
}

(function initReservations() {
	setupAirports();
	setupSchedule($.csv.toObjects(FLIGHT_SCHEDULE));
}());