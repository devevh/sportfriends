//clic sur se connecter pour afficher la modale du formulaire de connexion
document.getElementByClassName('imgpub').addEventListener('click',function(){
	document.getElementById('modaleImagePub').style.display='block';
});
//clic sur le x pour fermer la modale de connexion
document.getElementById('fermerPub').addEventListener('click',function(){
	document.getElementById('modaleImagePub').style.display='none';
});