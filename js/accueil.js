function furtivite(id) {
  let x = document.getElementById(id);
  let y = document.getElementById('gererAffichage_'+id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    y.className = "fa fa-arrow-up";
	//y.innerHTML = "v";
  } else { 
    x.className = x.className.replace(" w3-show", "");
    y.className = "fa fa-arrow-down";
	//y.innerHTML = "&gt;";
  }
}