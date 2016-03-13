var pingPong = require('./ping-pong.js').pingPong;

var goal = prompt("What number do you want to ping-pong up to?")
var result = pingPong(goarl);
result.forEach(function(element) {
  console.log(element);
});
