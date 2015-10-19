import {
  easeInOutExpo,
  easeInOutCirc,
  easeInOutSine,
  easeInOutQuint,
  easeInOutQuart,
  easeInOutCubic,
  easeInOutQuad,
  linearEase
} from './Easing.js';

import BezierEasing from 'bezier-easing';

var iteration = 0;
var totalIterations = 200;
var easingValue;

const field = document.getElementById('field');
const fieldWidth = 150;
const fieldHeight = 150;
const ball = document.getElementById('ball');
const ballBoundaryBox = ball.getBBox();

var duration = 4; // seconds
var bounding = 75 - ballBoundaryBox.width / 2;

/*var moveRight = true;

var mainCanvas = document.getElementById("myCanvas");
var mainContext = mainCanvas.getContext('2d');

var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;*/

var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

var x, y;
function drawCircle(ball) {
  var radius = 100;

  //this.easingValue = easeInOutCubic(this.iteration, 0, 1, this.totalIterations);

  var easing = BezierEasing(0, 0, 1, 0.5);
  this.easingValue = easing.get(1/this.totalIterations*this.iteration);

  x = Math.sin(-this.easingValue * 2 * Math.PI);
  y = Math.cos(-this.easingValue * 2 * Math.PI);

  var left = 75 + (bounding * x);
  var bottom = 75 + (bounding * y);

  ball.setAttributeNS(null, "cx", 150-left);
  ball.setAttributeNS(null, "cy", 150-bottom);


  //mainContext.arc(easingValue, 225, radius, 0, Math.PI * 2, false);
  //mainContext.closePath();

  // color in the circle
  //mainContext.fillStyle = "#006699";
  //mainContext.fill();

  if (this.iteration < this.totalIterations) {
    this.iteration++;
  } else {
    this.iteration = 0;
  }

  requestAnimationFrame(drawCircle.bind(this, ball));
}

setTimeout(drawCircle.bind({
  iteration: 0,
  totalIterations: 100,
  easingValue
}, ball), 0);
setTimeout(drawCircle.bind({
  iteration: 0,
  totalIterations: 100,
  easingValue
}, document.getElementById('ball1')), 250);
setTimeout(drawCircle.bind({
  iteration: 0,
  totalIterations: 100,
  easingValue
}, document.getElementById('ball2')), 500);
