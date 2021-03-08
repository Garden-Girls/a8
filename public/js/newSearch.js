var results = [
		{	
			"name": "Basil",
			"img": "basil.svg",
			"info": "basil text.",
			"tags": ["All", "Herbs"]
		},
		{	
			"name": "Rosemary",
			"img": "rosemary.svg",
			"info": "rosemary text.",
			"tags": ["All", "Herbs"]
		},
		{	
			"name": "Orchid",
			"img": "orchid.svg",
			"info": "orchid text.",
			"tags": ["All", "Flowers"]
		}
	];

var searchedFor = document.querySelector("#getSearch").textContent;
console.log(searchedFor);
if (searchedFor == "All") {
	for (var i = 0; i < results.length; i++) {
		var newDiv = document.createElement('div');
		newDiv.className = "result";

		var tagsDiv = document.createElement('div');
		tagsDiv.class = "filterTags";
		var tagsP = document.createElement('p');
		tagsP.textContent = results[i].tags;
		tagsDiv.appendChild(tagsP);
		newDiv.appendChild(tagsDiv);

		var imgDiv = document.createElement('div');
		imgDiv.class = "plantIMG";
		var img = document.createElement('img');
		img.class = "resultImg";
		img.src = "/images/" + results[i].img;
		imgDiv.appendChild(img);
		newDiv.appendChild(imgDiv);

		var infoDiv = document.createElement('div');
		infoDiv.class = "infoButton";
		var linkInfo = document.createElement('a');
		linkInfo.href = "/info/" + results[i].name;
		linkInfo.innerHTML = "?";
		infoDiv.appendChild(linkInfo);
		newDiv.appendChild(infoDiv);

		var addDiv = document.createElement('div');
		addDiv.class = "addButton";
		var linkAdd = document.createElement('a');
		linkAdd.href = "/editPlantPage/" + results[i].name;
		linkAdd.innerHTML = "+";
		addDiv.appendChild(linkAdd);
		newDiv.appendChild(addDiv);

		var nameDiv = document.createElement('div');
		nameDiv.class = "resultName";
		var nameP = document.createElement('p');
		nameP.textContent = results[i].name;
		nameDiv.appendChild(nameP);
		newDiv.appendChild(nameDiv);

		document.querySelector("#loadResults").appendChild(newDiv);
	}
}
else {
	var empty = true;
	for (var i = 0; i < results.length; i++) {
		if (results[i].name == searchedFor) {
			empty = false;
			var newDiv = document.createElement('div');
			newDiv.className = "result";

			var tagsDiv = document.createElement('div');
			tagsDiv.class = "filterTags";
			var tagsP = document.createElement('p');
			tagsP.textContent = results[i].tags;
			tagsDiv.appendChild(tagsP);
			newDiv.appendChild(tagsDiv);

			var imgDiv = document.createElement('div');
			imgDiv.class = "plantIMG";
			var img = document.createElement('img');
			img.class = "resultImg";
			img.src = "/images/" + results[i].img;
			imgDiv.appendChild(img);
			newDiv.appendChild(imgDiv);

			var infoDiv = document.createElement('div');
			infoDiv.class = "infoButton";
			var linkInfo = document.createElement('a');
			linkInfo.href = "/info/" + results[i].name;
			linkInfo.innerHTML = "?";
			infoDiv.appendChild(linkInfo);
			newDiv.appendChild(infoDiv);

			var addDiv = document.createElement('div');
			addDiv.class = "addButton";
			var linkAdd = document.createElement('a');
			linkAdd.href = "/editPlantPage/" + results[i].name;
			linkAdd.innerHTML = "+";
			addDiv.appendChild(linkAdd);
			newDiv.appendChild(addDiv);

			var nameDiv = document.createElement('div');
			nameDiv.class = "resultName";
			var nameP = document.createElement('p');
			nameP.textContent = results[i].name;
			nameDiv.appendChild(nameP);
			newDiv.appendChild(nameDiv);

			document.querySelector("#loadResults").appendChild(newDiv);
		}
	}
	if (empty) {
		var noResults = document.createElement('div');
		noResults.id = "noResults";
		var noResP = document.createElement('p');
		noResP.textContent = "Sorry, there were no results that matched your query. Would you like to add a plant regardless?";
		noResults.appendChild(noResP);
		var customPlant = document.createElement('a');
		customPlant.href = "/editPlantPage/None";
		customPlant.innerHTML = "Yes";
		noResults.appendChild(customPlant);
		document.querySelector("#loadResults").appendChild(noResults);
	}
}