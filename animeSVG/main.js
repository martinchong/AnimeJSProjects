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
anime({
  targets: '.box',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  direction: 'alternate',
  easing: 'linear',
  duration: 1000,
  loop: true
});

var beginLogB = document.querySelector('.begin-log');
var completeLogB = document.querySelector('.completed-log');
var loopBegan = 0;
var loopCompleted = 0;

var loopBegin = anime({
  targets: '.box2',
  translateX: 100,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutCirc',
  loopBegin: function(anim) {
    loopBegan++;
    beginLogB.value = 'loop began : ' + loopBegan;
  },
  loopComplete: function(anim) {
    loopCompleted++;
    completeLogB.value = 'loop completed : ' + loopCompleted;
  }
});

