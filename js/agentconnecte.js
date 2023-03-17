// scripts valides uniquement si la session est ouverte
//clic sur gestion du compte pour ouvrir la div
document.getElementById('ouvrirDonneesPersos').addEventListener('click', function() {
	var x=document.getElementById('donneesPersos');
	x.className=x.className.replace("w3-hide", "w3-show");
	var x=document.getElementById('mySidebar');
	x.className=x.className.replace("w3-show", "w3-hide");
	window.location.href=window.location+'#donneesPersos';
  });
//clic sur la croix pour fermer la div
document.getElementById('fermerDonneespersos').addEventListener('click', function() {
	var x=document.getElementById('donneesPersos');
	x.className=x.className.replace("w3-show", "w3-hide");
	window.location.href='./index.php';
  });
//clic sur le bouton annuler pour fermer la div
document.getElementById('btn_rst_modif').addEventListener('click', function() {
	var x=document.getElementById('donneesPersos');
	x.className=x.className.replace("w3-show", "w3-hide");
	window.location.href='./index.php';
  });
