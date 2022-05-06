'use strict';

var MAP;
var LINES;


const DESTINATIONS = [
	{
		code: 'ewr',
		name: 'Newark Liberty International (EWR)',
		pos: [40.70340156126785, -74.17330276840164],
		hubs: ['sfo', 'iah'],
		isHub: true
	},
	{
		code: 'sfo',
		name: 'San Francisco International (SFO)',
		pos: [37.62141455145011, -122.37878377625846],
		hubs: ['ewr', 'iah'],
		isHub: true
	},
	{
		code: 'iah',
		name: 'George Bush Intercontinental (IAH)',
		pos: [29.99029394928301, -95.33691148715191],
		hubs: ['ewr', 'sfo'],
		isHub: true
	},
	{
		name: 'Auckland Airport (AKL)',
		pos: [-37.008565657401164, 174.7847156217281],
		hubs: ['sfo'],
	},
	{
		name: 'Hartsfield-Jackson Atlanta International (ATL)',
		pos: [33.64083507608079, -84.42787180090849],
		hubs: ['ewr', 'sfo', 'iah'],
	},
	{
		name: 'El Dorado International (BOG)',
		pos: [4.701527767834316, -74.14601141660555],
		hubs: ['iah'],
	},
	{
		name: 'Boston Logan International (BOS)',
		pos: [42.365961658704904, -71.00960315045923],
		hubs: ['sfo', 'iah'],
	},
	{
		name: 'Barcelona-El Prat (BCN)',
		pos: [41.29799278042036, 2.0833798949812197],
		hubs: ['ewr'],
	},
	{
		name: 'Brasilia International (BSB)',
		pos: [-15.869654340657481, -47.91706316214675],
		hubs: ['iah'],
	},
	{
		name: 'Baltimore/Washington International (BWI)',
		pos: [39.177536943139835, -76.66830640614698],
		hubs: ['ewr', 'sfo'],
	},
	{
		name: 'Cancun International (CUN)',
		pos: [21.04198345163572, -86.87396332895656],
		hubs: ['iah'],
	},
	{
		name: 'Paris Charles de Gaulle (CDG)',
		pos: [49.01088754570143, 2.5481856293293754],
		hubs: ['ewr'],
	},
	{
		name: 'Indira Gandhi International (DEL)',
		pos: [28.556463675916227, 77.10008650432476],
		hubs: ['sfo'],
	},
	{
		name: 'Denver International (DEN)',
		pos: [39.856787796502296, -104.67360889044873],
		hubs: ['ewr', 'sfo', 'iah'],
	},
	{
		name: 'Dallas/Fort Worth International (DFW)',
		pos: [32.90175623187377, -97.04011304308536],
		hubs: ['ewr', 'sfo', 'iah'],
	},
	{
		name: 'Detroit Metropolitan Wayne County (DTW)',
		pos: [42.21640799753565, -83.35532128673535],
		hubs: ['iah'],
	},
	{
		name: 'Dubai International (DXB)',
		pos: [25.25309661391826, 55.36567275706557],
		hubs: ['sfo'],
	},
	{
		name: 'Ezeiza International (EZE)',
		pos: [-34.81472221811849, -58.5349142696793],
		hubs: ['iah'],
	},
	{
		name: 'Leonardo da Vinci International (FCO)',
		pos: [41.80413085802929, 12.251849849230378],
		hubs: ['ewr'],
	},
	{
		name: 'Frankfurt Airport (FRA)',
		pos: [50.038235470253035, 8.562452176837837],
		hubs: ['ewr'],
	},
	{
		name: 'Rio de Janeiro/Galeao International (GIG)',
		pos: [-22.804592230082836, -43.25675808978346],
		hubs: ['iah'],
	},
	{
		name: 'Sao Paulo/Guarulhos International (GRU)',
		pos: [-23.4301397120531, -46.47291429752642],
		hubs: ['iah'],
	},
	{
		name: 'Hong Kong International (HKG)',
		pos: [22.308602611679753, 113.91835201005935],
		hubs: ['sfo'],
	},
	{
		name: 'Daniel K. Inouye International (HNL)',
		pos: [21.319087239318254, -157.9254318902438],
		hubs: ['sfo'],
	},
	{
		name: 'Incheon International (ICN)',
		pos: [37.460632804087396, 126.44057390291141],
		hubs: ['sfo'],
	},
	{
		name: 'John F. Kennedy International (JFK)',
		pos: [40.64189712324801, -73.7779237593459],
		hubs: ['sfo', 'iah'],
	},
	{
		name: 'Harry Reid International (LAS)',
		pos: [36.08590149456017, -115.15072229119573],
		hubs: ['ewr', 'sfo', 'iah'],
	},
	{
		name: 'Los Angeles International (LAX)',
		pos: [33.9412952817257, -118.40872312135349],
		hubs: ['ewr', 'sfo', 'iah'],
	},
	{
		name: 'Heathrow Airport (LHR)',
		pos: [51.47058336357465, -0.4544242756733526],
		hubs: ['ewr'],
	},
	{
		name: 'Jorge Chavez International (LIM)',
		pos: [-12.023590851622739, -77.11199313107029],
		hubs: ['iah'],
	},
	{
		name: 'Orlando International (MCO)',
		pos: [28.418822273035058, -81.30431680312665],
		hubs: ['ewr', 'sfo', 'iah'],
	},
	{
		name: 'Mexico City International (MEX)',
		pos: [19.43624818319543, -99.07194048906919],
		hubs: ['iah'],
	},
	{
		name: 'Miami International (MIA)',
		pos: [25.796412980391715, -80.28700802739922],
		hubs: ['ewr', 'sfo', 'iah'],
	},
	{
		name: 'Minneapolis-Saint Paul International (MSP)',
		pos: [44.88624650092833, -93.22250729555996],
		hubs: ['ewr', 'iah'],
	},
	{
		name: 'Narita International (NRT)',
		pos: [35.77226493717075, 140.39293589386335],
		hubs: ['sfo'],
	},
	{
		name: 'O\'Hare International (ORD)',
		pos: [41.980694394637, -87.90899793532991],
		hubs: ['ewr', 'sfo', 'iah'],
	},
	{
		name: 'Portland International (PDX)',
		pos: [45.59024957185743, -122.59483674121826],
		hubs: ['ewr', 'iah'],
	},
	{
		name: 'Beijing Capital International (PEK)',
		pos: [40.0801853355692, 116.60315498033326],
		hubs: ['sfo'],
	},
	{
		name: 'Philadelphia International (PHL)',
		pos: [39.87312718764114, -75.24362441975858],
		hubs: ['sfo'],
	},
	{
		name: 'Phoenix Sky Harbor International (PHX)',
		pos: [33.43582170243552, -112.0101240396323],
		hubs: ['ewr', 'iah'],
	},
	{
		name: 'San Diego International (SAN)',
		pos: [32.733728095648374, -117.19304634789322],
		hubs: ['ewr'],
	},
	{
		name: 'Seattle-Tacoma International (SEA)',
		pos: [47.45358306768111, -122.30824812930476],
		hubs: ['ewr', 'sfo', 'iah'],
	},
	{
		name: 'Arturo Merino Benitez Airport (SCL)',
		pos: [-33.38938543980737, -70.79442733965293],
		hubs: ['iah'],
	},
	{
		name: 'Sydney Airport (SYD)',
		pos: [-33.94985609315001, 151.1818694507839],
		hubs: ['sfo'],
	},
	{
		name: 'Ben Gurion Airport (TLV)',
		pos: [32.0060775789537, 34.885625736443],
		hubs: ['ewr'],
	},
	{
		name: 'Taiwan Taoyuan International (TPE)',
		pos: [25.078385372504524, 121.23404549362135],
		hubs: ['sfo'],
	},
	{
		name: 'Mariscal Sucre Quito International (UIO)',
		pos: [-0.1234546241729393, -78.3604826167644],
		hubs: ['iah'],
	},
	{
		name: 'Vienna Airport (VIE)',
		pos: [48.11315657605562, 16.57551386824286],
		hubs: ['ewr'],
	},
	{
		name: 'Vancouver International (YVR)',
		pos: [49.19675521104217, -123.18147272578588],
		hubs: ['iah'],
	},
	{
		name: 'Toronto Pearson International (YYZ)',
		pos: [43.67779523959123, -79.6247972173393],
		hubs: ['iah'],
	},
];

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

	const caption = `${dest.isHub ? 'Hub - ' : ''}${dest.name}<br><a href="#book">Book a trip ></a>`;
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