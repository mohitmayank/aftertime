# aftertime
Very simple utility to write time in code. Instead of using numbers, use english (js)

## Install
`npm install aftertime`

## Use
```javascript
var after = require('aftertime');
console.log(after.two.days);  //172800000   --- milliseconds after two days

//or

var milliSecondsIn = after.milliSecondsIn;
var secondsIn = after.secondsIn;

console.log(milliSecondsIn.one.second);    //1000
console.log(milliSecondsIn.two.seconds);    //2000

console.log(secondsIn.one.hour);    //3600
console.log(secondsIn.two.days);    //172800
```
there are four intervals `one`, `two`, `five`, `ten` and following time units
- second(s)
- minute(s)
- hour(s)
- day(s)
- week(s)  - 7 days
- months(s)  - 30 days
- year(s)    - 12 months (360 days)
