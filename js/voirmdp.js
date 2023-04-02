function voirmdp() {
	var linput1 = document.getElementById('mdp1');
	var licone = document.getElementById('voir');
	if (linput1.type == 'text') {
			linput1.type = 'password';
			licone.className = "fa fa-eye";
	}
	else {
			linput1.type = 'text';
			licone.className = "fa fa-eye-slash";
	}
}
//

//afficher les mots de passe en clair lors du clic sur l'oeil
document.getElementById('voir').addEventListener('click',voirmdp);
