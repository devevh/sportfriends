//clic sur se connecter pour afficher la modale du formulaire de connexion
document.getElementById('menuConnecter').addEventListener('click',function(){
	document.getElementById('modaleConnecter').style.display='block';
});
//clic sur le x pour fermer la modale de connexion
document.getElementById('fermerConnecter').addEventListener('click',function(){
	document.getElementById('modaleConnecter').style.display='none';
});