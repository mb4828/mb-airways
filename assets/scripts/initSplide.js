'use strict';

new Splide( '.lead-splide', {
    width: '100%',
    height: 'clamp(300px, 75vh, 700px)',
    start: Math.floor(Math.random() * 5),
    type: 'fade',
    autoplay: true,
    rewind: true,
    speed: 2500,
    interval: 7000,
    easing: 'ease'
}).mount();

new Splide( '.fleet-table-splide-1', {
    width: '500px',
    height: '150px',
    type: 'loop',
    autoplay: true,
    speed: 4000,
    interval: 7000,
}).mount();

new Splide( '.fleet-table-splide-2', {
    width: '500px',
    height: '150px',
    type: 'loop',
    autoplay: true,
    speed: 4000,
    interval: 7000
}).mount();