//calculate and input age
console.log(document.querySelector(".plantsList").length);
var outerDiv = document.querySelector(".plantsList");
var loopDivs = outerDiv.children;

for (var i = 0; i < loopDivs.length; i++) {
	console.log(loopDivs[i]);
	var start = loopDivs[i].querySelector(".getStart").textContent;
	var startDate = new Date(start);
		
	var dateCurr = new Date();

	var plantAge = dateCurr.getTime() - startDate.getTime();
	var ageDays = plantAge/(1000 * 3600 * 24);
	ageDays = Math.floor(ageDays)

	loopDivs[i].querySelector(".inputAge").textContent = "Age: " + ageDays + " days old";
}

