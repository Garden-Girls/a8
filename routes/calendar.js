/*
 * GET home page.
 */

var myPlantsData = require("../myPlantsData.json");
var data = require("../data.json"); //for journal entries

exports.view = function(req, res){
	var index = -1; //should always find a valid index

	for (var i = 0; i < myPlantsData["Plants"].length; i++) {
		if (myPlantsData["Plants"][i].nickname == req.params.nickname) {
			index = i;
		}
	}

	var stringJSON = '{}';
	var startDate = "none";
	if (index != -1) {
		startDate = myPlantsData["Plants"][index].start;
		stringJSON = JSON.stringify(data[req.params.nickname]);
	}

  	res.render('calendar', {
  		"viewPlant": req.params.nickname,
  		"firstLoggable": startDate,
  		"dailyStats": stringJSON,
  		//trying to get plants for dropdown select
  		"Plants": myPlantsData["Plants"]
  	});
};