//coché la case si mode sombre si elle existe
let cbx=document.getElementById('modeSombreCarre');
if (typeof cbx !== undefined) {
  if (getCookie("sportfriends_mode") == "sombre") {
    cbx.checked=true;
  }
  else {
    cbx.checked=false;
  }
};