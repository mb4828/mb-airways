var AIRPORTS = new Map();

var FLIGHTS = [];

function getTailLogo(schedule) {
  if (['717-200', 'Q-400'].includes(schedule.type)) {
    return 'assets/images/logos/aloha-tail.png';
  } else if (schedule.type === 'MAX8' && (schedule.o === 'ANC' || schedule.d === 'ANC')) {
    return 'assets/images/logos/alaska-tail.png';
  } else {
    return 'assets/images/logos/mb-tail.png';
  }
}

function setupAirports() {
  for (const d of DESTINATIONS) {
    const codeIdx = d['name'].indexOf('(') + 1;
    const code = d['name'].slice(codeIdx, codeIdx + 3);
    AIRPORTS.set(code, d);
  }
}

function setupSchedule(rawSchedule) {
  for (let i = 1; i < rawSchedule.length; i++) {
    const r = rawSchedule[i];
    if (r['Pax'] == 0) {
      continue; // skip cargo only flights
    }
    const origin = r['Route'].slice(0, 3);
    const dest = r['Route'].slice(-3);
    const tpe = r['Type'].replace('MAX8-200', 'MAX8');

    let arr = luxon.DateTime.fromFormat(r['Arrival'], 'H:mm', { zone: 'utc' });
    let dep = luxon.DateTime.fromFormat(r['Departure'], 'H:mm', { zone: 'utc' });
    let dur = arr.diff(dep);
    if (arr < dep) {
      // make sure flights don't arrive before they depart
      arr = arr.plus(luxon.Duration.fromObject({ day: 1 }));
      dur = arr.diff(dep);
    }
    if (['747-400', '777-300', '787-10'].includes(tpe) && dest !== 'CUN' && dur.toMillis() <= 21600000) {
      // make sure ultra-long-haul flights have correct duration
      arr = arr.plus(luxon.Duration.fromObject({ day: 1 }));
      dur = arr.diff(dep);
    }
    const halfDur = dur.toMillis() / 2;
    const midpoint = dep.plus(luxon.Duration.fromObject({ milliseconds: halfDur }));

    FLIGHTS.push(
      new Object({
        o: origin,
        d: dest,
        at: midpoint.minus(luxon.Duration.fromObject({ minutes: 24 })).toJSDate(),
        dt: dep.plus(luxon.Duration.fromObject({ minutes: 15 })).toJSDate(),
        flight: i * 2 - 1,
        type: tpe,
      })
    );
    FLIGHTS.push(
      new Object({
        o: dest,
        d: origin,
        at: arr.minus(luxon.Duration.fromObject({ minutes: 24 })).toJSDate(),
        dt: midpoint.plus(luxon.Duration.fromObject({ minutes: 15 })).toJSDate(),
        flight: i * 2,
        type: tpe,
      })
    );
  }

  // copy all flights -24 hours and +24 hours
  const flightsTMin1 = [];
  const flightsTPlus1 = [];
  for (const f of FLIGHTS) {
    const tMin1 = { ...f };
    tMin1.at = luxon.DateTime.fromJSDate(tMin1.at)
      .plus(luxon.Duration.fromObject({ day: -1 }))
      .toJSDate();
    tMin1.dt = luxon.DateTime.fromJSDate(tMin1.dt)
      .plus(luxon.Duration.fromObject({ day: -1 }))
      .toJSDate();
    flightsTMin1.push(tMin1);

    const tPlus1 = { ...f };
    tPlus1.at = luxon.DateTime.fromJSDate(tPlus1.at)
      .plus(luxon.Duration.fromObject({ day: -1 }))
      .toJSDate();
    tPlus1.dt = luxon.DateTime.fromJSDate(tPlus1.dt)
      .plus(luxon.Duration.fromObject({ day: -1 }))
      .toJSDate();
    flightsTPlus1.push(tPlus1);
  }

  FLIGHTS = flightsTMin1.concat(FLIGHTS, flightsTPlus1);
}

(function init() {
  try {
    setupAirports();
    setupSchedule($.csv.toObjects(FLIGHT_SCHEDULE));
  } catch {}
})();
