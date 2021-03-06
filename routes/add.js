var data = require("../data.json");

exports.addEntry = function(request, response) {    
	// Your code goes here
	var inputDate = request.query.date;
	var month = inputDate.substring(5, 7);
	var day = inputDate.substring(8);
	var year = inputDate.substring(0, 4);
	var outputDate = month + "/" + day + "/" + year;


	newEntry = {
		"date": outputDate,
		"text": request.query.description,
		"status": request.query.buttonGroup,
		"slides": []
	}

	data.Froggy.push(newEntry);
	response.render('froggy', data);
 }