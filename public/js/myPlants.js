var today = new Date().toISOString().split('T')[0];
console.log(today);
//document.getElementsByName("date")[0].setAttribute('max', today);
$("#date")[0].setAttribute('max', today);

//document.getElementsByName("sdate")[0].setAttribute('max', today);
$("#sdate")[0].setAttribute('max', today);

function getMood(){
	var radioMoods = document.getElementsByName('buttonGroup');
	var indMood = -1;

	for (var i = 0; i < radioMoods.length; i++) {
		if (radioMoods[i].checked) {
			indMood = i;
		}
	}
	var selectedMood = radioMoods[indMood].value;
	console.log(selectedMood);
}

getMood();

