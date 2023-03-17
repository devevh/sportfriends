//afficher le nombre restant de caracteres disponibles dans la textarea
//appel du gestionaire d'evenement
document.getElementById('message').addEventListener('keyup',function() {
	document.getElementById('taille').innerHTML = (this.maxLength-this.value.length)+"/"+this.maxLength+" car.";
	});
//fonction générique à appeler sur evenement onkeyup
function nbcarlimite(zonetexte,zoneaffichage) {
var txt=document.getElementById(zonetexte);
var aff=document.getElementById(zoneaffichage);
	aff.innerHTML = (txt.maxLength-txt.value.length)+"/"+txt.maxLength+" car.";
}