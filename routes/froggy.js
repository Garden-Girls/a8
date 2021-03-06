var myPlantsData = require('../myPlantsData.json');

exports.view = function(req, res){
	var viewPlant = req.params.plantName;
	var ind = -1;
	var accessPic = "edit-photo-button.svg"; 
	var accessSpecies = "placeholder species";
	var watering = "";
	//this may be unneccesary if default image is added when updating json

	for (var i = 0; i < myPlantsData["Plants"].length; i++) {
		if (myPlantsData["Plants"][i]["nickname"] == viewPlant) {
			ind = i;
			break;
		}
	}

	//this default safeguard may be unneccesary if default image is added when updating json
	if (ind != -1) {
		accessPic = myPlantsData["Plants"][ind]["pic"];
		accessSpecies = myPlantsData["Plants"][ind]["species"];
		watering = myPlantsData["Plants"][ind]["watering"];
	}

	//calculating age
	var startDate = new Date(myPlantsData["Plants"][ind]["start"]);
	var dateCurr = new Date(); //UTC timezone

	var plantAge = dateCurr.getTime() - startDate.getTime();
	var ageDays = plantAge/(1000 * 3600 * 24);
	ageDays = Math.floor(ageDays);

	//formatting start
	var start = new Date(myPlantsData["Plants"][ind]["start"]);
	var monthS = start.getMonth() + 1;
	if (monthS < 10) {
		monthS = "0" + monthS;
	}
	var dayS = start.getDate();
	if (dayS < 10) {
		dayS = "0" + dayS;
	}
	var yearS = start.getFullYear();
	start = yearS + "-" + monthS + "-" + dayS;

	//formatting watering into ToD and How Often
	var period;
	var merid;
	var minutes;
	var hours;
	if (watering != "") {
		period = watering.substring(9);
		hours = watering.substring(0, 2);
		minutes = watering.substring(3, 5);
		merid = watering.substring(6, 8);
	}

	if (merid == "AM") {
		if (hours == 12) {
			hours -= 12;
		}
	}
	else {
		hours += 12;
	}
	//!!! fix code ^ for value to default display 

	var time = hours + ":" + minutes;

  res.render('froggy', {
  	"nickname": viewPlant,
  	"pic": accessPic,
  	"species": accessSpecies,
  	"age": ageDays,
  	"start": start,
  	"period": period,
  	"time": time
  });
};

var data = require("../data.json");

exports.addEntry = function(req, res) {    
	// Your code goes here
	var viewPlant = req.params.plantName;

	var inputDate = req.query.date;
	var month = inputDate.substring(5, 7);
	var day = inputDate.substring(8);
	var year = inputDate.substring(0, 4);
	var date = month + "/" + day + "/" + year;

	var exists = false;
	var ind = -1;

	for (var i = 0; i < data[viewPlant].length; i++) {
		if (data[viewPlant][i].date == date) {
			exists = true;
			ind = i;
		}
	}

	//update existing entry
	if (exists) {
		data[viewPlant][ind].text = req.query.description;
		data[viewPlant][ind].status = req.query.buttonGroup;
		/*
		if (req.query.img != null) {
			data[viewPlant][ind].slides.push(req.query.img);
		}
		*/
	}
	else { //create new entry to be added
		var picArr = [];
		//picArr.push(req.query.img); //input photo not functional rn
		newEntry = {
		"date": date,
		"text": req.query.description,
		"status": req.query.buttonGroup,
		"slides": picArr
		};
		data[viewPlant].push(newEntry);
	}


	var index = -1;
	var accessPic = "edit-photo-button.svg"; 
	var accessSpecies = "placeholder species";
	//this may be unneccesary if default image is added when updating json

	for (var i = 0; i < myPlantsData["Plants"].length; i++) {
		if (myPlantsData["Plants"][i]["nickname"] == viewPlant) {
			index = i;
			break;
		}
	}

	//this default safeguard may be unneccesary if default image is added when updating json
	if (index != -1) {
		accessPic = myPlantsData["Plants"][index]["pic"];
		accessSpecies = myPlantsData["Plants"][index]["species"];
	}

	//calculating age
	var startDate = new Date(myPlantsData["Plants"][index]["start"]);
	var dateCurr = new Date(); //UTC timezone

	var plantAge = dateCurr.getTime() - startDate.getTime();
	var ageDays = plantAge/(1000 * 3600 * 24);
	ageDays = Math.floor(ageDays);

	res.render('froggy', {
		"nickname": viewPlant,
  		"pic": accessPic,
  		"species": accessSpecies,
  		"age": ageDays
	});
 }

//SECOND FORM
exports.update = function(request, response) {    
	// Your code goes here
	var inputDate = request.query.sdate;
	var month = inputDate.substring(5, 7);
	var day = inputDate.substring(8);
	var year = inputDate.substring(0, 4);
	var outputDate = month + "/" + day + "/" + year;

	var howOften = request.query.remind;
	var timeDay = request.query.time;
	var timeHour = timeDay.substring(0,2);
	var timeRest = timeDay.substring(2);
	if (timeHour > 12) {
		timeHour = timeHour - 12 + timeRest + " PM";
	}
	else if (timeHour == 12) {
		timeHour = timeHour + timeRest + " PM";
	}
	else if (timeHour == 0) {
		timeHour = 12 + timeRest + " AM";
	}
	else {
		timeHour = timeHour + timeRest + " AM";
	}

	if (timeHour.length < 8) {
		timeHour = "0" + timeHour;
	}

	var watering = timeHour + " " + howOften;

	//done calculating variables
	var viewPlant = request.params.plantName;
	var accessPic = "edit-photo-button.svg"; 
	var accessSpecies = "placeholder species";

	for (var i = 0; i < myPlantsData["Plants"].length; i++) {
		if (myPlantsData["Plants"][i]["nickname"] == viewPlant) {
			myPlantsData["Plants"][i].watering = watering;
			myPlantsData["Plants"][i].start = outputDate;

			accessPic = myPlantsData["Plants"][i]["pic"];
			accessSpecies = myPlantsData["Plants"][i]["species"];
			break;
		}
	}
	//get vars for rendering
	var startDate = new Date(outputDate);
	var dateCurr = new Date(); //UTC timezone

	var plantAge = dateCurr.getTime() - startDate.getTime();
	var ageDays = plantAge/(1000 * 3600 * 24);
	ageDays = Math.floor(ageDays);

	response.render('froggy', {
  		"nickname": viewPlant,
	  	"pic": accessPic,
	  	"species": accessSpecies,
	  	"age": ageDays,
	  	"start": outputDate,
  	});
 }