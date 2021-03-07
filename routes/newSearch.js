var searchData = require("../searchData.json");

exports.view = function(req, res){
	//vars for filter and search
	//var addedSpecies = req.params.species; (format ex.)
  res.render('newSearch', searchData);
};
