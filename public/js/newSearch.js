var results = [
		{	
			"name": "Basil",
			"img": "basil.svg",
			"info": "basil text.",
			"tags": ["Herbs"]
		},
		{	
			"name": "Rosemary",
			"img": "rosemary.svg",
			"info": "rosemary text.",
			"tags": ["Herbs", "Flowers"]
		},
		{	
			"name": "Orchid",
			"img": "orchid.svg",
			"info": "orchid text.",
			"tags": ["Flowers"]
		},
		{
			"name": "testFern",
			"img": "sunflower.svg",
			"info": "test Fern.",
			"tags": ["Ferns"]
		}
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
			tagsDiv.className = "filterTags";
			for (var j = 0; j < results[i].tags.length; j++) {
				tagsDiv.classList.add(results[i].tags[j]);
			}
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