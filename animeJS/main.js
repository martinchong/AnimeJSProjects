/*
anime({
    targets:'div.box.r',
    translateY: [
        {value: 250, duration: 1000},
        {value: 100, duration: 800}
    ],
    rotate: {
        value: '2turn',
        easing: 'easeInOutSine'
    }
}); 

anime({
    targets:'div.box.b',
    translateY: [
        {value: 250, duration: 1000, delay: 500},
        {value: 50, duration: 800}
    ],
    rotate: {
        value: '2turn',
        easing: 'easeInOutSine',
        delay:  500
    }
}); 

anime({
    targets:'div.box.g',
    translateY: [
        {value: 250, duration: 1000, delay: 1000},
        {value: 150, duration: 800}
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine',
        delay: 1000
    }
});
*/
var playPause = anime({
    targets:'div.box',
    translateY: [
        {value: 250, duration: 500},
        {value: 0, duration: 500}
    ],
    rotate: {
        value: '2turn',
        easing: 'easeInOutSine'
    },
    backgroundColor: '#000',
    delay: function(el, i, l){return i * 1000},
    autoplay: false,
    loop: true
});

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;