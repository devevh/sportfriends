function furtivite(id) {
  let x = document.getElementById(id);
  let y = document.getElementById('gererAffichage_'+id);
  if (x.className.indexOf("w3-hide") >= 0) {
      x.className = x.className.replace("w3-hide","w3-show");
      y.className = "fa fa-arrow-up";
  }
  else {
	x.className = x.className.replace("w3-show", "w3-hide");
    y.className = "fa fa-arrow-down";
  }
}