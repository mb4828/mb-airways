'use strict';

// helper methods

function getTime(tm, code) {
  const airport = AIRPORTS.get(code);
  return luxon.DateTime.fromJSDate(tm).setZone(airport.tz).toLocaleString(luxon.DateTime.TIME_SIMPLE);
}

function getTodayTime(tm, code) {
  const airport = AIRPORTS.get(code);
  const now = luxon.DateTime.now().setZone(airport.tz);
  return luxon.DateTime.fromJSDate(tm).setZone(airport.tz).set({ year: now.year, month: now.month, day: now.day });
}

function getDuration(dep, arr, raw = false) {
  const d = luxon.DateTime.fromJSDate(dep);
  const a = luxon.DateTime.fromJSDate(arr);
  if (raw) {
    return a.diff(d);
  }
  return a.diff(d).shiftTo('hours', 'minutes').normalize().toHuman({ unitDisplay: 'short' });
}

function getNumDays(dep, arr, codeDep, codeArr) {
  const airportDep = AIRPORTS.get(codeDep);
  const airportArr = AIRPORTS.get(codeArr);
  return (
    luxon.DateTime.fromJSDate(arr).setZone(airportArr.tz).ordinal -
    luxon.DateTime.fromJSDate(dep).setZone(airportDep.tz).ordinal
  );
}

function getAirportCity(code) {
  const airport = AIRPORTS.get(code);
  if (airport && airport.city) {
    const temp = airport.city.split(',');
    if (temp.length > 1) {
      return temp.slice(0, temp.length - 1).join(',');
    }
    return temp
      .join('')
      .match(/[a-zA-Z. ]*/g)
      .join('');
  }
  console.error('Missing city for ' + code);
  return '';
}

function getAirportCountry(code) {
  const airport = AIRPORTS.get(code);
  if (airport && airport.city) {
    const temp = airport.city.split(',');
    return temp[temp.length - 1].trim();
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

function canConnect(f1, f2) {
  return luxon.DateTime.fromJSDate(f1['at']).plus(luxon.Duration.fromObject({ minutes: 20 })) < f2['dt']; // 20 minute minimum connection
}

// ui control

function getDestinationMap() {
  // extract destinations from schedule db
  const destSet = new Set();
  for (const s of FLIGHTS) {
    destSet.add(s['o']);
    destSet.add(s['d']);
  }
  const destList = Array.from(destSet).sort((a, b) => (getAirportCity(a) < getAirportCity(b) ? -1 : 1));

  // generate destination map
  const destMap = new Map();
  for (const d of destList) {
    const country = getAirportCountry(d);
    if (destMap.has(country)) {
      destMap.set(country, destMap.get(country).concat([{ label: getAirportCity(d), value: d }]));
    } else {
      destMap.set(country, [{ label: getAirportCity(d), value: d }]);
    }
  }

  return destMap;
}

function setupForm() {
  // from/to
  const destMap = getDestinationMap();
  const countries = Array.from(destMap.keys())
    .filter((d) => !!d)
    .sort((a, b) => (a < b ? -1 : 1));
  for (const c of countries) {
    const group = $(`<optgroup label="${c}">`);
    for (const d of destMap.get(c)) {
      group.append(`<option value="${d.value}">${d.label}</option>`);
    }
    $('#booking-from').append(group.clone());
    $('#booking-to').append(group.clone());
  }

  // set destination from query params
  const queryDest = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  }).d;
  if (queryDest) {
    $('#booking-to').val(queryDest);
  }
  $('#booking-from').val('EWR'); // default from to EWR for now

  // swap
  const f = $('#booking-from');
  const t = $('#booking-to');
  const s = $('#booking-swap');
  s.click(() => {
    const temp = f.val();
    f.val(t.val());
    t.val(temp);
  });

  // depart/return
  const d = $('#booking-depart');
  const r = $('#booking-return');
  const now = luxon.DateTime.now();

  d.attr({ min: now.toFormat('yyyy-MM-dd') });
  r.attr({ min: now.toFormat('yyyy-MM-dd') });
  d.change(() => {
    r.attr({ min: d.val() });
    if (r.val() < d.val()) {
      r.val(d.val());
    }
  });

  // set depart/return dates to sensible values
  d.val(now.toFormat('yyyy-MM-dd'));
  r.val(now.plus({ days: 5 }).toFormat('yyyy-MM-dd'));
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
    $(`#trip-header-${id} .fa-chevron-up.flip-me`).removeClass('flip-me');
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
    const last = f.length - 1;
    const numDays = getNumDays(f[0]['dt'], f[last]['at'], f[0]['o'], f[last]['d']);
    const wrapper = $('<div class="trip-wrapper">');
    wrapper.append(`<div class="trip-header" id="trip-header-${id}" onclick="toggleTrip('${id}')">
							<strong style="flex-grow:1">${getTime(f[0]['dt'], f[0]['o'])} &ndash; ${getTime(f[last]['at'], f[last]['d'])}${
      numDays > 0 ? `<sup>+${numDays}</sup>` : ''
    }</strong>
							<span style="flex-basis:250px"><i class="fas fa-fw fa-stopwatch"></i> ${getDuration(f[0]['dt'], f[last]['at'])}</span>
							<span style="flex-basis:200px">
								${
                  f.length === 1
                    ? '<span style="color: var(--accent-color)"><i class="fas fa-fw fa-map-marker-alt"></i> Nonstop</span>'
                    : f.length === 2
                    ? `<i class="fas fa-fw fa-map-marker-alt"></i> 1 stop <small>${f[0]['d']}</small>`
                    : `<i class="fas fa-fw fa-map-marker-alt"></i> ${f.length - 1} stops <small>${f[0].d}, ${
                        f[1].d
                      }</small>`
                }
							</span>
							<i class="fas fa-chevron-up"></i>
						</div>`);
    const details = $(`<div class="trip-details" id="trip-details-${id}">`);
    for (let i = 0; i < f.length; i++) {
      const s = f[i];
      details.append(`<ul>
								<li>
									<span class="fa-stack fa-1x">
								    	<i class="fas fa-circle fa-stack-2x"></i>
								    	<i class="fas fa-plane-departure fa-stack-1x fa-inverse"></i>
								  	</span>
									<span>${getTime(s.dt, s.o)} &bull; ${getAirportName(s.o)}<br><small>Flight time: ${getDuration(
        s['dt'],
        s['at']
      )}</small></span>
								</li>
								<li>
									<span class="fa-stack fa-1x">
								    	<i class="fas fa-circle fa-stack-2x"></i>
								    	<i class="fas fa-plane-arrival fa-stack-1x fa-inverse"></i>
								  	</span>
								  	<span>${getTime(s.at, s.d)} &bull; ${getAirportName(s.d)}<br><small><img class="tail-logo" 
									src="${getTailLogo(s)}"> Flight ${s.flight} &bull; ${s.type}</small></span>
							  	</li>
							</ul>`);
      if (i !== last) {
        details.append(`<div class="trip-layover">${getDuration(s.at, f[i + 1].dt)} layover &bull; ${s.d}</div>`);
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
    let flights = [];
    for (const f1 of FLIGHTS) {
      if (foundFlights.has(f1.flight)) {
        continue; // skip duplicate itineraries
      }
      if (f1['o'] === origin) {
        // non-stop
        if (f1['d'] === dest) {
          flights.push([f1]);
          foundFlights.add(f1.flight);
        }

        for (const f2 of FLIGHTS) {
          if (f1['d'] === f2['o'] && canConnect(f1, f2)) {
            // 1 stop
            if (isHub(f1['d']) && f2['d'] === dest) {
              flights.push([f1, f2]);
              foundFlights.add(f1.flight);
              break; // skip duplicate itineraries
            }

            // 2 stops
            for (const f3 of FLIGHTS) {
              if (
                f2['d'] === f3['o'] &&
                (!isUSA(f1['o']) || !isUSA(f3['d'])) && // 2 stops only allowed for intl destinations
                isHub(f1['d']) &&
                isHub(f2['d']) && // connections only allowed through hubs
                new Set([f1.o, f2.o, f3.o, f1.d, f2.d, f3.d]).size === 4 && // no repeat cities (sanity check)
                canConnect(f2, f3) &&
                f3['d'] === dest
              ) {
                flights.push([f1, f2, f3]);
                foundFlights.add(f1.flight);
                break; // skip duplicate itineraries
              }
            }
          }
        }
      }
    }
    // keep the top 10 fastest trips and get rid of the rest
    flights.sort((a, b) =>
      getDuration(a[0]['dt'], a[a.length - 1]['at'], true).toMillis() <
      getDuration(b[0]['dt'], b[b.length - 1]['at'], true).toMillis()
        ? -1
        : 1
    );
    flights = flights.slice(0, 10);

    // sort by departure time
    flights.sort((a, b) => (getTodayTime(a[0].dt, a[0].o) < getTodayTime(b[0].dt, b[0].o) ? -1 : 1));
    setTimeout(() => displayFlights(flights), 500);
  }, 1000);
}

(function init() {
  setupForm();
})();
