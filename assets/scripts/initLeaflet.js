'use strict';

var MAP;
var LINES;

const HUB_ICON = L.icon({
    iconUrl: 'assets/images/marker-accent.png',
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [15, 30], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});

const MARKER_ICON = L.icon({
    iconUrl: 'assets/images/marker-primary.png',
    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});

function drawGeodesic(map, pos1, pos2) {
	const line = L.geodesic([pos1, pos2], {weight: 2, opacity: 0.4, color: 'var(--primary-color)'}).addTo(map);
	LINES.push(line);
}

function drawMarker(map, dest, options={}) {
	const marker = L.marker(dest.pos, {icon: dest.isHub ? HUB_ICON : MARKER_ICON}).addTo(map);

	const caption = `${dest.isHub ? 'Hub - ' : ''}${dest.name}<br><small>${dest.city}</small><hr><a href="#book">Book a trip ></a>`;
	marker.bindPopup(caption);

	if (!document.getElementById('hub-select').value) {
		// when hub is not selected, show connections on mouseover
		marker.on('mouseover', onMarkerMouseover);
		marker.on('mouseout', onMarkerMouseout);
	} else if (options.originPos) {
		// when hub is selected, connect hub to all destinations and don't allow mouseover
		drawGeodesic(map, options.originPos, dest.pos); 
	}
}

function drawMap(hub) {
	const bounds = L.latLngBounds(L.latLng(-60, -177), L.latLng(80, 195)); // cutoff intl date line
	if (MAP) {
		MAP.remove();
	}
	MAP = L.map('route-map', {
		scrollWheelZoom: false, 
		minZoom: 2, 
		maxBounds: bounds, 
		maxBoundsViscosity: 1
	});
	LINES = [];

	// map imagery
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 18,
	    id: 'mapbox/streets-v11',
	    tileSize: 512,
	    zoomOffset: -1,
	    accessToken: 'pk.eyJ1IjoibWI0ODI4IiwiYSI6ImNsMnFweGpuYTAwNXAzY3Bob3lqaG9rMG4ifQ.O8yYprih5CDw3tH0bDrCHw'
	}).addTo(MAP);

	const originPos = hub ? DESTINATIONS.find(h => h.code === hub).pos : null;
	const destList = DESTINATIONS.filter(d => !hub || d.hubs.includes(hub) || d.code === hub);
	const posList = destList.map(d => d.pos);

	// draw destinations
	for (const d of destList) {
		drawMarker(MAP, d, {originPos});
	}

	// set view
	MAP.fitBounds(posList);
}

function onMarkerMouseover(event) {
	const map = event.target._map;
	const dest = DESTINATIONS.find(d => event.target._popup._content.includes(d.name));

	if (dest && !dest.isHub) {
		// connect destination to hubs
		for (const h of dest.hubs) {
			const hub = DESTINATIONS.find(hb => hb.code === h);
			drawGeodesic(map, hub.pos, dest.pos);
		}
	} else if (dest && dest.isHub) {
		// connect hub to all destinations
		for (const d of DESTINATIONS) {
			if (d.hubs.includes(dest.code)) {
				drawGeodesic(map, dest.pos, d.pos);
			}
		}
	}
}

function onMarkerMouseout(event) {
	const map = event.target._map;
	LINES.forEach(function (line) {
		map.removeLayer(line);
	});
	LINES = [];
}

(function init() {
	drawMap();
}());
