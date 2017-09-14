
var devtools_detect = require('devtools-detect');

var stopCheatersIsRunning = 0;

// Set to 1 to destroy the dev tools....
var preventDebugging = 0;

if (preventDebugging) {
  (function() {
      (function(f) {
        (function a() {
          try {
            function b(i) {
              if (('' + (i / i)).length !== 1 || i % 20 === 0) {
                (function() {}).constructor('debugger')();
              } else {
                debugger ;
              }
              b(++i);
            }
            b(0);
          } catch (e) {
            f.setTimeout(a, 5000);
          }
        })()
      })(document.body.appendChild(document.createElement('frame')).contentWindow);
    }
  )();
}

window.setInterval(function () {
  if (devtools_detect.open) { scoldCheaters(); };
}, 6000);

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  scoldCheaters();
});

function scoldCheaters() {
  if (!stopCheatersIsRunning) {
    stopCheatersIsRunning = 1;
    game.say("You're not trying to cheat, are you?");
    console.log('Cheater!');
    window.setTimeout(function () {
      stopCheatersIsRunning = 0;
    }, 5000);
  }
}