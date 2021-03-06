exports.view = function(req, res){
	var addedSpecies = req.params.species;
  res.render('editPlantPage', {
  	"species": addedSpecies
  });
};

var data = require("../myPlantsData.json");

exports.addPlant = function(request, response) {    
	// Your code goes here
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

	var addedSpecies = request.params.species;

	newPlant = {
		"pic": "emily.svg",
		"nickname": request.query.name,
		"species": addedSpecies,
		"watering": watering,
		"start": outputDate
	}

	data.Plants.push(newPlant);

	response.render('editPlantPage', {
  		"species": addedSpecies
  	});
 }