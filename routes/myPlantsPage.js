/*
 * GET home page.
 */


	

exports.view = function(req, res){

var myPlantsData = require("../myPlantsData.json")

	var startDate = new Date(myPlantsData.startDate);
	
	var dateCurr = new Date();

	var plantAge = dateCurr.getTime() - startDate.getTime();
	var ageDays = plantAge/(1000 * 3600 * 24);
	ageDays = Math.floor(ageDays);
	

  

  res.render('myPlantsPage', {
  		"img": myPlantsData.species,
  		"nickname": myPlantsData.nickname,
		"species": myPlantsData.species,
		"Plants": myPlantsData.Plants,
		"autoAge": ageDays,
		"watering": myPlantsData.watering
  });

}


	
	