var results = [
		{	
			"name": "Basil",
			"img": "basil.svg",
			"info": "Indirect sunlight. Water so that soil is moist but dries in between watering. Recommended watering once a day.",
			"tags": ["Herbs"]
		},
		{	
			"name": "Rosemary",
			"img": "rosemary.svg",
			"info": "Water rosemary plants evenly throughout the growing season, but be careful not to overwater. Prune regularly so that plants won't get lanky. For fresh rosemary in the winter, grow the plant indoors in a pot (or take a cutting from an outdoor plant and keep a second indoors)",
			"tags": ["Herbs", "Flowers"]
		},
		{	
			"name": "Orchid",
			"img": "orchid.svg",
			"info": "Keep them moist at all times but avoid over-watering. Phalaenopsis orchids generally require brief dry periods between every watering.",
			"tags": ["Flowers"]
		},
		{
			"name": "Sunflower",
			"img": "sunflower.svg",
			"info": "Plant them 1 inch deep, after the last frost, and in loamy soil with good drainage and full sun. Keep the soil moist as they are establishing themselves, but let the soil dry out between waterings once they're mature.",
			"tags": ["Flowers"]
		},
		{
			"name": "Lavender",
			"img": "Lavender.svg",
			"info": "Place your container grown lavender plants somewhere they receive full sun (at least 8 hours per day) and water them sparingly. Allow the soil to dry out between waterings, but don't let it get so dry that the plant wilts.",
			"tags": ["Flowers", "Herbs"]
		},
		{
			"name": "Boston Ferns",
			"img": "boston ferns.svg",
			"info": "Situate Boston ferns indoors in bright, indirect sunlight away from drafty doors and heating vents. Provide as much humidity as possible and carefully monitor the soil to ensure plants stay consistently moist.",
			"tags": ["Ferns"]
		},
		{
			"name": "Lady Ferns",
			"img": "lady ferns.svg",
			"info": "All Ferns thrive in light to heavy shade. A few, such as Lady Ferns (Athyrium filix-femina) will grow in full sun in the North, provided the planting site is damp. Water Ferns regularly if rain is not sufficient, and do not let the soil get completely dry.",
			"tags": ["Ferns"]
		},
	];

var searchedFor = document.querySelector("#getSearch").textContent;
console.log(searchedFor);

var noResults = document.createElement('div');
noResults.id = "noResults";
var noResP = document.createElement('p');
noResP.textContent = "Sorry, there were no results that matched your search. Would you like to add a plant regardless?";
noResults.appendChild(noResP);
var customPlant = document.createElement('a');
customPlant.href = "/editPlantPage/None";
customPlant.innerHTML = "Yes";
noResults.appendChild(customPlant);
document.querySelector("#loadResults").appendChild(noResults);
document.querySelector("#noResults").style.display = 'none';

if (searchedFor == "All" || searchedFor == "") {
	for (var i = 0; i < results.length; i++) {
		var newDiv = document.createElement('div');
		newDiv.className = "result";

		var tagsDiv = document.createElement('div');
		tagsDiv.className = "filterTags";
		for (var j = 0; j < results[i].tags.length; j++) {
			tagsDiv.classList.add(results[i].tags[j]);
		}
		newDiv.appendChild(tagsDiv);

		var imgDiv = document.createElement('div');
		imgDiv.className = "plantIMG";
		var img = document.createElement('img');
		img.className = "resultImg";
		img.src = "/images/" + results[i].img;
		imgDiv.appendChild(img);
		newDiv.appendChild(imgDiv);

		var nameDiv = document.createElement('div');
		nameDiv.className = "resultName";
		var nameP = document.createElement('p');
		nameP.textContent = results[i].name;
		nameDiv.appendChild(nameP);
		newDiv.appendChild(nameDiv);

		var buttonDiv = document.createElement('div');
		buttonDiv.className= "buttons";

		var infoDiv = document.createElement('div');
		infoDiv.className = "infoButton";
		var linkInfo = document.createElement('a');
		linkInfo.href = "/info/" + results[i].name;
		linkInfo.innerHTML = "?";
		infoDiv.appendChild(linkInfo);
		buttonDiv.appendChild(infoDiv);

		var addDiv = document.createElement('div');
		addDiv.className = "addButton";
		var linkAdd = document.createElement('a');
		linkAdd.href = "/editPlantPage/" + results[i].name;
		linkAdd.innerHTML = "+";
		addDiv.appendChild(linkAdd);
		buttonDiv.appendChild(addDiv);

		newDiv.appendChild(buttonDiv);

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
			tagsDiv.className = "filterTags";
			for (var j = 0; j < results[i].tags.length; j++) {
				tagsDiv.classList.add(results[i].tags[j]);
			}
			newDiv.appendChild(tagsDiv);

			var imgDiv = document.createElement('div');
			imgDiv.className = "plantIMG";
			var img = document.createElement('img');
			img.className = "resultImg";
			img.src = "/images/" + results[i].img;
			imgDiv.appendChild(img);
			newDiv.appendChild(imgDiv);

			var nameDiv = document.createElement('div');
			nameDiv.className = "resultName";
			var nameP = document.createElement('p');
			nameP.textContent = results[i].name;
			nameDiv.appendChild(nameP);
			newDiv.appendChild(nameDiv);

			var buttonDiv = document.createElement('div');
			buttonDiv.className = "buttons";

			var infoDiv = document.createElement('div');
			infoDiv.className = "infoButton";
			var linkInfo = document.createElement('a');
			linkInfo.href = "/info/" + results[i].name;
			linkInfo.innerHTML = "?";
			infoDiv.appendChild(linkInfo);
			buttonDiv.appendChild(infoDiv);

			var addDiv = document.createElement('div');
			addDiv.className = "addButton";
			var linkAdd = document.createElement('a');
			linkAdd.href = "/editPlantPage/" + results[i].name;
			linkAdd.innerHTML = "+";
			addDiv.appendChild(linkAdd);
			buttonDiv.appendChild(addDiv);

			newDiv.appendChild(buttonDiv);

			document.querySelector("#loadResults").appendChild(newDiv);
		}
	}
	if (empty) {
		document.querySelector("#noResults").style.display = '';
	}
}

//Filtering
var results = $('#loadResults .result');
console.log(results);

function filter() {
	document.querySelector("#noResults").style.display = 'none';
	for (var i = 0; i < results.length; i++) {
		results[i].style.display = '';
	}

	if (document.getElementById('Ferns').checked) {
		for (var i = 0; i < results.length; i++) {
			if (results[i].querySelector('.filterTags').classList.contains("Ferns") == false){
				results[i].style.display = 'none';
			}
		}
	}

	if (document.getElementById('Flowers').checked) {
		for (var i = 0; i < results.length; i++) {
			if ((results[i].querySelector('.filterTags').classList.contains("Flowers")) == false){
				results[i].style.display = 'none';
			}
		}
	}

	if (document.getElementById('Herbs').checked) {
		for (var i = 0; i < results.length; i++) {
			if ((results[i].querySelector('.filterTags').classList.contains("Herbs")) == false){
				results[i].style.display = 'none';
			}
		}
	}

	//check if there are no results
	var empty = true;
	for (var i = 0; i < results.length; i++) {
		if (results[i].style.display == '') {
			empty = false;
		}
	}
	if (empty) {
		console.log("filteredEmpty");
		document.querySelector("#noResults").style.display = '';
	}

}