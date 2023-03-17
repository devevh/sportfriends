
// Tabs
function openTab(evt, tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" w3-show", " w3-hide");
  }
  var activebtn = document.getElementsByClassName("tabbtn");
  for (i = 0; i < x.length; i++) {
    activebtn[i].className = activebtn[i].className.replace(" w3-theme", "");
  }
  document.getElementById(tabName).className = document.getElementById(tabName).className.replace(" w3-hide", " w3-show");
  evt.currentTarget.className += " w3-theme";
}

var mybtn = document.getElementsByClassName("tabbtn")[0];
mybtn.click();