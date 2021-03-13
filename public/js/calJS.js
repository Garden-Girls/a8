const date = new Date(); //today's date

//select option that page is viewing
var selectedPlant = document.querySelector('#getViewPlant').textContent;
for (var i = 0; i < document.querySelector('#plantDrop').length; i++) {
	if (selectedPlant == document.querySelector('#plantDrop')[i].value) {
		document.querySelector('#plantDrop')[i].selected = 'selected';
	}
}
//

renderCal();

document.querySelector('#prevMon').addEventListener('click', function() {
	date.setMonth(date.getMonth() - 1);
	renderCal();
});

document.querySelector('#nextMon').addEventListener('click', function() {
	date.setMonth(date.getMonth() + 1);
	renderCal();
});


document.querySelector('#plantDrop').onchange = function() {
	console.log("plantChanged");
	var newPlant = document.querySelector('#plantDrop').value;
	window.location.href = "/calendar/" + newPlant;
	//renderCal();
	//rerender Cal depending on plant selected (how to get info?)
	//calVisual();
};

function renderCal() {
	console.log(selectedPlant);

	const months = ["January", "February", "March", "April", "May", "June", 
				"July", "August", "September", "October", "November", "December"];

	//maybe change to jQuery
	document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + date.getFullYear();
	document.querySelector(".date p").innerHTML = new Date().toDateString();

	document.querySelector('.days').innerHTML = "";

	//adds days of prev month
	const monthDays = document.createDocumentFragment();
	const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
	date.setDate(1);
	const firstDayIndex = date.getDay();
	//changed newDiv from div to a, update names later
	for (var i = firstDayIndex; i > 0; i--) {
		var newDiv = document.createElement('a');
		newDiv.innerHTML = prevLastDay - i + 1;
		newDiv.classList.add("prev-date");
		if (date.getFullYear() < new Date().getFullYear()) {
			newDiv.classList.add("loggable");
		}
		else if (date.getFullYear() == new Date().getFullYear() &&
			date.getMonth() <= new Date().getMonth()) {
			newDiv.classList.add("loggable");
		}
		else {
			newDiv.classList.add("notLog");
		}
		//added test
		if (newDiv.classList.contains('loggable')) {
			var formatYear = date.getFullYear();
			var formatMonth = date.getMonth();
			if (formatMonth == 0) {
				formatMonth = 12;
				formatYear -= 1;
			}
			if (formatMonth < 10) {
				formatMonth = "0" + formatMonth;
			}
			var formatDay = prevLastDay - i + 1;
			if (formatDay < 10) {
				formatDay = "0" + formatDay;
			}
			var customLink = "/dayEntry/" + selectedPlant + "/" + formatMonth + "/" + formatDay + "/" + formatYear;
			newDiv.setAttribute("href", customLink);
		}
		//end test
		monthDays.appendChild(newDiv);
	}

	//adds days of this month
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

	for (var i = 1; i <= lastDay; i++) {
		var newDiv = document.createElement('a');
		if (date.getFullYear() < new Date().getFullYear()) {
			newDiv.classList.add("loggable");
		}
		else if (date.getFullYear() == new Date().getFullYear() && 
			date.getMonth() < new Date().getMonth()) {
			newDiv.classList.add("loggable");
		}
		else if (date.getFullYear() == new Date().getFullYear() && 
			date.getMonth() == new Date().getMonth() && 
			i <= new Date().getDate()) {
			newDiv.classList.add("loggable");
		}
		else {
			newDiv.classList.add("notLog");
		}
		if (i == new Date().getDate() && date.getMonth() == new Date().getMonth() && date.getFullYear() == new Date().getFullYear()) {
			newDiv.classList.add("today");
		}
		//added test
		if (newDiv.classList.contains('loggable')) {
			var formatYear = date.getFullYear();
			var formatMonth = date.getMonth() + 1;
			if (formatMonth < 10) {
				formatMonth = "0" + formatMonth;
			}
			var formatYear = date.getFullYear();
			var formatDay = i;
			if (formatDay < 10) {
				formatDay = "0" + formatDay;
			}
			var customLink = "/dayEntry/" + selectedPlant + "/" + formatMonth + "/" + formatDay + "/" + formatYear;

			newDiv.setAttribute("href", customLink);
		}
		//end test
		newDiv.innerHTML = i;
		monthDays.appendChild(newDiv);
	}

	//adds days of next month
	const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
	const nextDays = 7 - lastDayIndex - 1;

	for (var i = 1; i <= nextDays; i++) {
		var newDiv = document.createElement('a');
		newDiv.innerHTML = i;
		newDiv.classList.add("next-date");
		if (date.getFullYear() < new Date().getFullYear()) {
			newDiv.classList.add("loggable");
		}
		else if (date.getFullYear() == new Date().getFullYear() && date.getMonth() < new Date().getMonth()) {
			newDiv.classList.add("loggable");
		}
		else {
			newDiv.classList.add("notLog");
		}
		//added test
		if(newDiv.classList.contains('loggable')) {
			var formatYear = date.getFullYear();
			var formatMonth = date.getMonth() + 2;
			if (formatMonth == 13){
				formatMonth = 1;
				formatYear += 1;
			}
			if (formatMonth < 10) {
				formatMonth = "0" + formatMonth;
			}
			var formatDay = i;
			if (formatDay < 10) {
				formatDay = "0" + formatDay;
			}
			var customLink = "dayEntry/" + selectedPlant + "/" + formatMonth + "/" + formatDay + "/" + formatYear;

			newDiv.setAttribute("href", customLink);
		}
		//end test
		monthDays.appendChild(newDiv);
	}

	document.querySelector('.days').appendChild(monthDays);

	//document.getElementsByClassName('loggable')

	var calendarDays = document.querySelector('#calendarDays');
	var hasLink = calendarDays.getElementsByClassName("loggable");

	prevLog();
	calVisual();
}


//make calendar show if date has existing entry, and color code based on status

	
function calVisual() {
	var textJSON = document.querySelector("#getDailyStats").textContent;
	var testData = JSON.parse(textJSON);
	var days = $('#calendarDays .loggable');
	for (var i = 0; i < days.length; i++) {
		var viewYear = date.getFullYear();
		var viewMonth = date.getMonth() + 1;
		if (days[i].classList.contains("prev-date")) {
			viewMonth--;
			if (viewMonth == 0) {
				viewYear--;
				viewMonth = 12;
			}
		}
		if (days[i].classList.contains("next-date")) {
			viewMonth++;
			if (viewMonth == 13) {
				viewYear++;
				viewMonth = 1;
			}
		}
		if (viewMonth < 10) {viewMonth = "0" + viewMonth;}
		var viewDay = days[i].textContent;
		if (viewDay < 10) {viewDay = "0" + viewDay;}
		var viewDate = viewMonth + "/" + viewDay + "/" + viewYear;
		

		for (var j = 0; j < testData.length; j++) {
			if (testData[j]["date"] == viewDate){
				var moodOfDay = testData[j]["status"];
				console.log(moodOfDay);
				days[i].classList.add(moodOfDay);
			}
		}
		console.log(viewDate);
	}
	console.log(days);
}

//remove loggable from dates after start 
function prevLog() {
	var firstLog = document.querySelector("#getFirstLoggable").textContent;
	if (firstLog == "none") {
		console.log("no start date");
		var days = $('#calendarDays .loggable');
		for (var i = 0; i < days.length; i++) {
			days[i].classList.remove("loggable");
			days[i].removeAttribute("href");
		}
		return;
	}
	var firstMonth = firstLog.substring(0, 2);
	var firstDay = firstLog.substring(3, 5);
	var firstYear = firstLog.substring(6);

	var days = $('#calendarDays .loggable');
	for (var i = 0; i < days.length; i++) {
		var viewYear = date.getFullYear();
		var viewMonth = date.getMonth() + 1;
		if (days[i].classList.contains("prev-date")) {
			viewMonth--;
			if (viewMonth == 0) {
				viewYear--;
				viewMonth = 12;
			}
		}
		if (days[i].classList.contains("next-date")) {
			viewMonth++;
			if (viewMonth == 13) {
				viewYear++;
				viewMonth = 1;
			}
		}
		if (viewMonth < 10) {viewMonth = "0" + viewMonth;}
		var viewDay = days[i].textContent;
		if (viewDay < 10) {viewDay = "0" + viewDay;}
		//var viewDate = viewMonth + "/" + viewDay + "/" + viewYear;

		if (viewYear < firstYear) {
			days[i].classList.remove("loggable");
			days[i].removeAttribute("href");
		}
		if (viewYear == firstYear && 
			viewMonth < firstMonth) {
			days[i].classList.remove("loggable");
			days[i].removeAttribute("href");
		}
		if (viewYear == firstYear && 
			viewMonth == firstMonth && 
			viewDay < firstDay) {
			days[i].classList.remove("loggable");
			days[i].removeAttribute("href");
		}
	}
}