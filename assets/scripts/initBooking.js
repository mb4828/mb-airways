'use strict';

function searchFlights(e) {
	e.preventDefault();
	const formData = new FormData(e.target);
	const {direction, to, from, departDate, returnDate, travelers, bookingClass} = Object.fromEntries(formData);
	const url = `https://www.google.com/travel/flights?q=${direction} flights to ${to} from ${from} on ${departDate} through ${returnDate} with ${travelers} ${bookingClass}`;
	console.log(url);
	window.open(url, '_blank');
}

function initDestinations() {
	const f = document.getElementById('booking-from');
	const t = document.getElementById('booking-to');
	const swap = document.getElementById('booking-swap');

	// swap button
	swap.addEventListener('click', function () {
		const temp = f.value;
		f.value = t.value;
		t.value = temp;
	});
}

function initDepartReturn() {
	const d = document.getElementById('booking-depart');
	const r = document.getElementById('booking-return');
	const now = luxon.DateTime.now();

	// set min values
	d.min = r.min = now.toFormat('yyyy-MM-dd');
	d.addEventListener('change', function () {
		r.min = d.value;
		if (r.value < d.value) {
			r.value = d.value;
		}
	});

	// set depart and return dates to sensible values
	d.value = now.toFormat('yyyy-MM-dd');
	r.value = now.plus({days: 5}).toFormat('yyyy-MM-dd');
}

(function initBooking() {
	initDestinations();
	initDepartReturn();
	document.getElementById('booking-form').onsubmit = searchFlights;
}());