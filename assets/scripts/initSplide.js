'use strict';

new Splide( '.splide', {
    width: '100%',
    height: 'clamp(300px, 75vh, 700px)',
    start: Math.floor(Math.random() * 5),
    type: 'fade',
    autoplay: true,
    rewind: true,
    speed: 3000,
    interval: 7000
}).mount();