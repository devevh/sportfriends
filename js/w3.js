// Side navigation
function w3_open() {
var x=document.getElementById('mySidebar');
//alert ('ouvrir '+quelleId);
  x.className=x.className.replace("w3-hide", "w3-show");
}

function w3_close() {
var x=document.getElementById('mySidebar');
//alert ('fermer '+quelleId);
  x.className=x.className.replace("w3-show", "w3-hide");
}


// Tabs
function openCity(evt, cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    //x[i].style.display = "none";
    x[i].className.replace(" w3-show", " w3-hide");
  }
  var activebtn = document.getElementsByClassName("testbtn");
  for (i = 0; i < x.length; i++) {
    activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
  }
  //document.getElementById(cityName).style.display = "block";
  document.getElementById(cityName).className.replace(" w3-hide", " w3-show");
  evt.currentTarget.className += " w3-dark-grey";
}

// Accordions
function myAccFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}


// Progress Bars
function move() {
  var elem = document.getElementById("myBar");   
  var width = 5;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function quitter() { window.close();}


// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}