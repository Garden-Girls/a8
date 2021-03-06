//NOTE: using UTC time and date
var today = new Date().toISOString().split('T')[0];
console.log(today);
//document.getElementsByName("date")[0].setAttribute('max', today);
$("#date")[0].setAttribute('max', today);




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

