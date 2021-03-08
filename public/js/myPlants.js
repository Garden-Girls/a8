var today = new Date().toISOString().split('T')[0];
console.log(today);
//document.getElementsByName("date")[0].setAttribute('max', today);
$("#date")[0].setAttribute('max', today);

//document.getElementsByName("sdate")[0].setAttribute('max', today);
$("#sdate")[0].setAttribute('max', today);

//select radiobutton for watering period
var period = document.querySelector('#radioVal').textContent;
var radioPeriods = document.getElementsByName('remind');
for (var i = 0; i < radioPeriods.length; i++) {
	if (radioPeriods[i].value == period) {
		radioPeriods[i].checked = true;
	}
}


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

