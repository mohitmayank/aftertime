var after = require('./index');

var milliSecondsIn = after.milliSecondsIn;
var secondsIn = after.secondsIn;

console.log(milliSecondsIn.one.second);
console.log(milliSecondsIn.two.seconds);

console.log(secondsIn.one.hour);
console.log(secondsIn.two.days);
