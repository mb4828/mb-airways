'use strict';

function convertAllKph() {
    $('kph').each(function() {
        const kph = $(this).text();
        const mph = kph * 0.6213711922;
        $(this).text(`${Math.round(mph)} mph (${Math.round(kph)} kph)`)
    });
}

function convertAllKm() {
    $('km').each(function() {
        const km = $(this).text();
        const miles = km * 0.621371;
        $(this).text(`${Math.round(miles).toLocaleString("en-US")} miles (${Math.round(km).toLocaleString("en-US")} km)`)
    });
}

function convertAllMeters() {
    $('mtr').each(function() {
        const meter = $(this).text();
        const feet = meter * 3.28084;
        $(this).text(`${Math.round(feet)} feet (${Math.round(meter)} meters)`)
    });
}

convertAllKph();
convertAllKm();
convertAllMeters();