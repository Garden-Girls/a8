/*
 * GET home page.
 */


	

exports.view = function(req, res){

var myPlantsData = require("../myPlantsData.json")


  res.render('myPlantsPage', {
  		"img": myPlantsData.species,
  		"nickname": myPlantsData.nickname,
		"species": myPlantsData.species,
		"Plants": myPlantsData.Plants,
		"watering": myPlantsData.watering
  });

}


	
	