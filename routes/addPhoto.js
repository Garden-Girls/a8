/*
 * GET home page.
 */

var data = require("../gallery.json");
exports.view = function(req, res){
	var plantToShow = req.params.plantName;
	console.log(data);
	var monthToShow = req.params.monthNum;
	var dayToShow = req.params.dayNum;
	var yearToShow = req.params.yearNum;

	var dateToShow = monthToShow + "/" + dayToShow + "/" + yearToShow;

  res.render('addPhoto', {
  	"plant": plantToShow,
  	"date": dateToShow,
  	"images": data.images
  });
};