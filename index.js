'use strict';

// time in seconds...
var minute = 60;
var hour = (minute * 60);
var day  = (hour * 24);
var week = (day * 7);
var month = (day * 30);
var year = (month * 12);

var getIntervals = function(no, multiplier) {
	if(no === 1) {
		return {
			second : multiplier,
			minute : minute * multiplier,
			hour : hour * multiplier,
			day : day * multiplier,
			week : week * multiplier,
			month : month * multiplier,
			year : year * multiplier
		};
	} else {
		no = no * multiplier;
		return {
			seconds : no,
			minutes : no * minute,
			hours : no * hour,
			days : no * day,
			weeks : no * week,
			months : no * month,
			year : no * year
		};
	}
};

var after = {};
after.one = getIntervals(1, 1000);
after.two = getIntervals(2, 1000);
after.five = getIntervals(5, 1000);
after.ten = getIntervals(10, 1000);

after.milliSecondsIn = {
	one : getIntervals(1, 1000),
	two : getIntervals(2, 1000),
	five : getIntervals(5, 1000),
	ten : getIntervals(10, 1000)
};

after.secondsIn = {
	one : getIntervals(1, 1),
	two : getIntervals(2, 1),
	five : getIntervals(5, 1),
	ten : getIntervals(10, 1)
};

module.exports = after;
