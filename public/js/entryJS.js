//DO: get mood from data, then select radio button
function selectMood(){
	var radioMoods = document.getElementsByName('buttonGroup');

	var viewPlant = document.querySelector("#getPlant").textContent;
	var viewDate = document.querySelector("#getDate").textContent;
	var viewMood = document.querySelector("#getMood").textContent;
	console.log(viewPlant);
	console.log(viewDate);
	console.log(viewMood);

	for (var i = 0; i < radioMoods.length; i++) {
		if (radioMoods[i].value == viewMood) {
			radioMoods[i].checked = true;
		}
	}
}

selectMood();
