// Slideshows
var slideIndex = 0;

setInterval(plusDivsAuto, 5000);

function plusDivsAuto() {
  slideIndex = slideIndex + 1;
  showDivs(slideIndex);
}

function plusDivs(n) {
  slideIndex = slideIndex + n;
  showDivs(slideIndex);
}


function showDivs(n) {
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    //x[i].style.display = "none";  
    x[i].className = x[i].className.replace(" w3-show", " w3-hide");  
  }
  //x[slideIndex-1].style.display = "block";  
  x[slideIndex-1].className = x[slideIndex-1].className.replace(" w3-hide", " w3-show");  
}

//showDivs(1);