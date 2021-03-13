exports.view = function(req, res){
	var addedimg = req.params.img;


  res.render('editPlantPage', {
  	"species": req.params.species//,
  	//"img":addedimg
  });
};

var myPlantsData = require("../myPlantsData.json");
var data = require("../data.json");

exports.addPlant = function(request, response) {    
	// Your code goes here
	//check if nickname is unique
	var newName = request.query.name;
	var unique = true;
	for (var i = 0; i < myPlantsData["Plants"].length; i++) {
		if (newName == myPlantsData["Plants"][i].nickname) {
			unique = false;
			break;
		}
	}

	if (unique) {
	//end check
		var inputDate = request.query.date;
		var month = inputDate.substring(5, 7);
		var day = inputDate.substring(8);
		var year = inputDate.substring(0, 4);
		var outputDate = month + "/" + day + "/" + year;

		var howOften = request.query.remindPer;
		var timeDay = request.query.remindTime;
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
		if (watering.charAt(2)!=":"){
			watering = "None"
		};

		var addedimg = request.params.img;

		var startDate = new Date(outputDate);
		var dateCurr = new Date(); //UTC timezone

		var plantAge = dateCurr.getTime() - startDate.getTime();
		var ageDays = plantAge/(1000 * 3600 * 24);
		ageDays = Math.floor(ageDays);

		newPlant = {
			"img": addedimg,
			"nickname": request.query.name,
			"species": request.params.species,
			"watering": watering,
			"tod": request.query.remindTime,
			"period": request.query.remindPer,
			"start": outputDate,
			"autoAge":ageDays
		};
		myPlantsData.Plants.push(newPlant);

		var propName = request.query.name;
		data[propName] = [];
	}
	//if nickname not unique, should do nothing


	response.render('editPlantPage', {
  		"species": request.params.species,
  		//"img":addedimg
  		"nickname": request.query.name,
  		"unique": unique
  	});
 }



