//NOTE: using UTC time and date
var today = new Date().toISOString().split('T')[0];
console.log(today);
//document.getElementsByName("date")[0].setAttribute('max', today);
$("#date")[0].setAttribute('max', today);

var url = String(window.location.href);
if (url.indexOf("/add?name=") == -1) {
	//has not added a plant
	if (document.querySelector("#viewPlants").classList.contains('disabled') == false) {
		document.querySelector("#viewPlants").classList.add('disabled');
		console.log(document.querySelector("#viewPlants").classList);
	}
}
else {
    document.querySelector("#viewPlants").classList.add('disabled');
    if(document.querySelector('#getUnique').textContent == "true") {
    	if (document.querySelector("#viewPlants").classList.contains('disabled') == true) {
    		document.querySelector("#viewPlants").classList.remove('disabled');
    	}
    }
}


function imagefun() {
            var Image_Id = document.getElementById('flower');
            if (Image_Id.src.match("/images/add-photo.svg")) {
                Image_Id.src = 'https://loremflickr.com/320/240/plant';
            }
            if (Image_Id.src.match('https://loremflickr.com/320/240/plant')) {
                Image_Id.src = 'https://loremflickr.com/320/240/flower';
            }
      
            else {
                Image_Id.src = "https://loremflickr.com/320/240/plant";}}

