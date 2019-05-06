anime({
    targets: '.path2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });

var path = anime.path('.path3');
var loopBegan = 0;
var loopCompleted = 0;
anime({
  targets: '.box',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  direction: 'alternate',
  easing: 'linear',
  duration: 1000,
  loop: true,
  loopBegin: function(anim) {
    loopBegan++;
    beginLogEl.value = 'loop began : ' + loopBegan;
  },
  loopComplete: function(anim) {
    loopCompleted++;
    completeLogEl.value = 'loop completed : ' + loopCompleted;
  }
});