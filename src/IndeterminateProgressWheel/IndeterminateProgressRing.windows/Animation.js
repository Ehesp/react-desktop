window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

const field = document.getElementById('field');
const fieldWidth = 150;
const fieldHeight = 150;
const ball = document.getElementById('ball');
const ballBoundaryBox = ball.getBBox();

var duration = 4; // seconds
var bounding = 75 - ballBoundaryBox.width / 2;

var start = null;

function easeInOutExpo(currentTime, changeInValue, duration) {
  currentTime /= duration/2;
  if (currentTime < 1) return changeInValue/2 * Math.pow( 2, 10 * (currentTime - 1) );
  currentTime--;
  return changeInValue/2 * ( -Math.pow( 2, -10 * currentTime) + 2 );
}


function step(timestamp) {
  var value, progress, x, y;
  if(start === null) {
    start = timestamp;
  }

  value = timestamp - start;
  progress = value / duration / 1000; // percent
  //

  x = Math.sin(-progress * 2 * Math.PI);
  y = Math.cos(-progress * 2 * Math.PI);

  x = Math.sin(easeInOutExpo(value, -progress * 2 * Math.PI, 4000));
  y = Math.cos(easeInOutExpo(value, -progress * 2 * Math.PI, 4000));

  //console.log(x, y);
  //console.log(easeInOutExpo(timestamp, 0, x, 4000));

  var left = 75 + (bounding * x);
  var bottom = 75 + (bounding * y);

  ball.setAttributeNS(null, "cx", 150-left);
  ball.setAttributeNS(null, "cy", 150-bottom);


  if(progress >= 1) start = null;
  //setTimeout(function () {requestAnimationFrame(step)}, 500);
  requestAnimationFrame(step);
}

requestAnimationFrame(step);
