/*
 * GET home page.
 */
var searchData = require("../searchData.json");

exports.view = function(req, res){
	var species = req.params.species;
	var ind = -1;
	//ind is okay, because info/:species is only linked to by valid search results

	for (var i = 0; i < searchData["Results"].length; i++) {
		if (searchData["Results"][i].name == species) {
			ind = i;
		}
	}
	res.render('basilInfoPage', {
		"img": searchData["Results"][ind].img,
		"species": species,
		"info": searchData["Results"][ind].info
  });
};

