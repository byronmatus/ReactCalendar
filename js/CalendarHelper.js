var currentMonth = new Date();
currentMonth = currentMonth.getMonth();

var calendarHelper = {
	'today': new Date(),
	'getInitialMonthDays': function(month, year) {
		var days = [];
		var currentDate;
		for (i=0; i<this.daysInMonth(month, year); i++) {
			currentDate = new Date(year, month, i+1);
			//console.log(currentDate.format());
			days.push({'day': i+1, 'selected': 0, 'dow': currentDate.getDay()});
		}
		return days;
	},
	'daysInMonth': function(month, year) {
		var days;
		if ( (!isEven(month) && month > 5) || month === 6 || month === 2 || month === 0 ) {
			days = 31;
		} else if (month !== 1) {
			days = 30;
		} else {
			if (year % 400 === 0 || year % 4 === 0) { //Is it a leap year?
			   days = 29;
			} else {
				days = 28;
			}
		}
		return days;
	},
	'months': [
		{
			'name': 'January'
		},
		{
			'name': 'February'
		},
		{
			'name': 'March'
		},
		{
			'name': 'April'
		},
		{
			'name': 'May'
		},
		{
			'name': 'June'
		},
		{
			'name': 'July'
		},
		{
			'name': 'August'
		},
		{
			'name': 'September'
		},
		{
			'name': 'October'
		},
		{
			'name': 'November'
		},
		{
			'name': 'December'
		},
	]
}
var _calendar = 
	{
		'currentYear': calendarHelper.today.getFullYear(),
		'currentMonth': {'num': currentMonth, 'name': calendarHelper.months[currentMonth].name, 'days': calendarHelper.getInitialMonthDays(currentMonth, calendarHelper.today.getFullYear())},
		'currentMonth': {'num': currentMonth, 'name': calendarHelper.months[currentMonth].name, 'days': calendarHelper.getInitialMonthDays(currentMonth, calendarHelper.today.getFullYear())},
		'selected_dates': [],
	};

