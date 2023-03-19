//clic sur se connecter pour afficher la modale du formulaire de connexion
document.getElementById('P1').addEventListener('click',function(){
	document.getElementById('modaleAfficherProfil').style.display='block';
});
//clic sur le x pour fermer la modale de connexion
document.getElementById('fermerAfficherProfil').addEventListener('click',function(){
	document.getElementById('modaleAfficherProfil').style.display='none';
});