/*
 * GET home page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
	console.log(data);
	var plantToShow = req.params.plantName;

	var monthToShow = req.params.monthNum;
	var dayToShow = req.params.dayNum;
	var yearToShow = req.params.yearNum;

	var dateToShow = monthToShow + "/" + dayToShow + "/" + yearToShow;

	var ind = -1;


	for (var i = 0; i < data[plantToShow].length; i++) {
		if (data[plantToShow][i].date == dateToShow) {
			ind = i;
		}
	}

	var forSlides = [];
	var forText = "";
	var forMood = "";

	if (ind != -1) {
		forSlides = data[plantToShow][ind].slides;
		forText = data[plantToShow][ind].text;
		forMood = data[plantToShow][ind].status;
	}

	res.render('dayEntry', {
		"plant": plantToShow,
		"date": dateToShow,
		"status": forMood,
		"slides": forSlides,
		"text": forText
	});
};

exports.addEntry = function(req, res) {    
	// Your code goes here
	var viewPlant = req.params.plantName;

	var monthToShow = req.params.monthNum;
	var dayToShow = req.params.dayNum;
	var yearToShow = req.params.yearNum;
	var date = monthToShow + "/" + dayToShow + "/" + yearToShow;
	//^ need to know to add to data
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
		newEntry = {
		"date": date,
		"text": req.query.description,
		"status": req.query.buttonGroup,
		"slides": [] 
		};
		data[viewPlant].push(newEntry);
	}

	var forSlides = [];
	var forText = "";
	var forMood = "";

	//if (ind != -1) {
	//after adding, get ind to render
	for (var i = 0; i < data[viewPlant].length; i++) {
		if (data[viewPlant][i].date == date) {
			exists = true;
			ind = i;
		}
	}
		forSlides = data[viewPlant][ind].slides;
		forText = data[viewPlant][ind].text;
		forMood = data[viewPlant][ind].status;
	//}

	res.render('dayEntry', {
		"plant": viewPlant,
		"date": date,
		"status": forMood, //work
		"slides": forSlides, //work
		"text": forText //work
	});
 }
