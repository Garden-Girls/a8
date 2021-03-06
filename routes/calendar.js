/*
 * GET home page.
 */

var myPlantsData = require("../myPlantsData.json");

exports.view = function(req, res){
  res.render('calendar', myPlantsData);
};