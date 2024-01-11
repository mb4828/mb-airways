'use strict';

var MAP;
var LINES;

const HUB_ICON = {
  icon: L.icon({
    iconUrl: 'assets/images/marker-accent.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -30], // point from which the popup should open relative to the iconAnchor
  }),
  zIndexOffset: 1000,
};

const MARKER_ICON = {
  icon: L.icon({
    iconUrl: 'assets/images/dot2.png',
    iconSize: [12, 12], // size of the icon
    iconAnchor: [6, 6], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -6], // point from which the popup should open relative to the iconAnchor
  }),
};

const MARKER_ICON_SECONDARY = {
  icon: L.icon({
    iconUrl: 'assets/images/dot2-secondary.png',
    iconSize: [12, 12], // size of the icon
    iconAnchor: [6, 6], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -6], // point from which the popup should open relative to the iconAnchor
  }),
  zIndexOffset: -1000,
  opacity: 0.4,
};

const FLOWER_ICON = {
  icon: L.icon({
    iconUrl: 'assets/images/livery/mb-aloha/mb_aloha_flower.png',
    iconSize: [18, 18], // size of the icon
    iconAnchor: [9, 18], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -18], // point from which the popup should open relative to the iconAnchor
  }),
};

const DOG_ICON = {
  icon: L.icon({
    iconUrl: 'assets/images/livery/mb-alaska/mb_alaska_dog.png',
    iconSize: [18, 18], // size of the icon
    iconAnchor: [9, 18], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -18], // point from which the popup should open relative to the iconAnchor
  }),
};

function drawGeodesic(map, pos1, pos2) {
  const line = L.geodesic([pos1, pos2], { weight: 2, opacity: 0.4, color: 'var(--primary-color)' }).addTo(map);
  LINES.push(line);
}

function drawMarker(map, dest, options = {}) {
  let markerOpts = MARKER_ICON;
  if (dest.isHub) {
    markerOpts = HUB_ICON;
  } else if (dest.city.includes('Hawaii')) {
    markerOpts = FLOWER_ICON;
  } else if (dest.city.includes('Alaska')) {
    markerOpts = DOG_ICON;
  } else if (options.hub && !dest.hubs.includes(options.hub)) {
    markerOpts = MARKER_ICON_SECONDARY;
  }
  const marker = L.marker(dest.pos, markerOpts).addTo(map);

  const codeIdx = dest.name.indexOf('(') + 1;
  const caption = `&#9992; ${dest.isHub ? 'Hub - ' : ''}${dest.name}<br><small>${
    dest.city
  }</small><hr><a href="reservations.html?d=${dest.name.slice(codeIdx, codeIdx + 3)}">Book a trip ></a>`;
  marker.bindPopup(caption);

  if (!options.hub) {
    // when hub is not selected, show connections on mouseover
    marker.on('mouseover', onMarkerMouseover);
    marker.on('mouseout', onMarkerMouseout);
  } else if (options.originPos && dest.hubs.includes(options.hub)) {
    // when hub is selected, connect hub to all destinations and don't allow mouseover
    drawGeodesic(map, options.originPos, dest.pos);
  }
}

function drawMap(hub, usOnly) {
  const bounds = L.latLngBounds(L.latLng(-60, -177), L.latLng(80, 195)); // cutoff intl date line
  if (MAP) {
    MAP.remove();
  }
  MAP = L.map('route-map', {
    scrollWheelZoom: false,
    minZoom: 2,
    maxBounds: bounds,
    maxBoundsViscosity: 1,
  });
  LINES = [];

  // map imagery
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWI0ODI4IiwiYSI6ImNsMnFweGpuYTAwNXAzY3Bob3lqaG9rMG4ifQ.O8yYprih5CDw3tH0bDrCHw',
  }).addTo(MAP);

  // draw destinations
  const tempDestinations = DESTINATIONS.filter((d) =>
    usOnly ? d.city.includes('USA') && !d.city.match('Alaska|Guam|Hawaii|Puerto Rico|Samoa') : true
  );
  const originPos = hub ? DESTINATIONS.find((h) => h.code === hub).pos : null;
  for (const d of tempDestinations) {
    drawMarker(MAP, d, { hub, originPos });
  }

  // set view
  const destList = tempDestinations.filter((d) => !hub || d.hubs.includes(hub) || d.code === hub);
  MAP.fitBounds(destList.map((d) => d.pos));
}

function onMarkerMouseover(event) {
  const map = event.target._map;
  const dest = DESTINATIONS.find((d) => event.target._popup._content.includes(d.name));

  if (dest && !dest.isHub) {
    // connect destination to hubs
    for (const h of dest.hubs) {
      const hub = DESTINATIONS.find((hb) => hb.code === h);
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

(function initLeaflet() {
  drawMap();
})();
