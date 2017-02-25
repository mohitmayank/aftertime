'use strict';

// time in milliseconds...
var minute = 1000 * 60;   //     60000
var hour = (minute * 60);
var day  = (hour * 24);
var week = (day * 7);
var month = (day * 30);

var getIntervals = function(no) {
	if(no === 1) {
		return {
			minute : minute,
			hour : hour,
			day : day,
			week : week,
			month : month,
			year : month * 12
		};
	} else {
		return {
			minutes : no * minute,
			hours : no * hour,
			days : no * day,
			weeks : no * week,
			months : no * month
		};
	}
};

var after = {};
after.one = getIntervals(1);
after.two = getIntervals(2);
after.five = getIntervals(5);
after.ten = getIntervals(10);

module.exports = after;
