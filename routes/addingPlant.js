var data = require("../myPlantsData.json");

exports.addPlant = function(request, response) {    
	// Your code goes here
	var inputDate = request.query.date;
	var month = inputDate.substring(5, 7);
	var day = inputDate.substring(8);
	var year = inputDate.substring(0, 4);
	var outputDate = month + "/" + day + "/" + year;

	var dateStart = new Date(outputDate);
	var dateCurr = new Date();
	var plantAge = dateCurr.getTime() - dateStart.getTime();
	var ageDays = plantAge/(1000 * 3600 * 24);

	newEntry = {
		"pic": "edit-photo-button.svg",
		"nickname": request.query.name,
		"species": "placeholder",
		"age": ageDays,
		"watering": "Once a week",
		"start": outputDate
	}

	data.Plants.push(newEntry);
	response.render('editPlantPage', data);
 }