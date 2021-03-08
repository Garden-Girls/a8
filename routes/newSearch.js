var searchData = require("../searchData.json");

exports.view = function(req, res){
	//vars for filter and search
	//var addedSpecies = req.params.species; (format ex.)
  res.render('newSearch', {
  	"searchedFor": "All"
  });
};

exports.searched = function(req, res){
	//vars for filter and search
	//var addedSpecies = req.params.species; (format ex.)
	var searchedFor = req.query.searched;

	//capitalize first letter
	var firstChar = searchedFor.substring(0, 1);
	var remainingChar = searchedFor.substring(1);
	firstChar = firstChar.toUpperCase();
	searchedFor = firstChar + remainingChar;


	/*for (var i = 0; i < searchData["Results"].length; i++) {
		if (searchData["Results"][i].name == searchedFor) {
			var newDiv = document.createElement('div');
			newDiv.className = "result";
			newDiv.innerHTML = searchedFor;
			document.querySelector("#loadResults").appendChild(newDiv);
		}
	}*/

  res.render('newSearch', {
  	"searchedFor": searchedFor
  });
};
