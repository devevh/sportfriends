function check_formC() {
	//traitement du formulaire de recherche des comptes
	var btn = document.getElementById("subrechcpte");
	var nom = document.getElementById("cnom");
	var tel = document.getElementById("ctelephone");
	var slctType = document.getElementById("ctype");
	if (nom.value > '' || tel.value > '' || slctType.selectedIndex > 0){
		//au moins un critére renseigné, on autorise la recherche
		btn.disabled = false;
	}else {
		// sinon on désactive le bouton submit
		btn.disabled = true;
	}
	return true;
}

function check_formT() {
	//traitement du formulaire de recherche des transactions
	var btn = document.getElementById("subrechtran");
	var nom = document.getElementById("tnom");
	var tel = document.getElementById("ttelephone");
	var slctType = document.getElementById("ttype");
	var slctTrans = document.getElementById("ttrans");
	//si au moins un critère renseigné
	if (nom.value > '' || tel.value > '' || slctType.selectedIndex >= 0 || slctTrans.selectedIndex >= 0 ) {
		btn.disabled = false;
	}
	else {
		btn.disabled = true;
	}
	return true;
}
//
function ctrlBtnCartes() {
	//traitement du formulaire d'envoi des demandes de carte
	var nbChecked=0;
	var btn1 = document.getElementById("majcartes");
	var btn2 = document.getElementById("envcartes");
	var chk = document.getElementsByTagName("INPUT");
	for (var i = 0; i < chk.length; i++) {
		if (chk[i].type == 'checkbox' && chk[i].id.substr(0,6) == 'chkcrt' && chk[i].checked ) {
			nbChecked = nbChecked + 1;
		}
	}
	if (nbChecked > 0){
		//au moins un critére renseigné, on active les boutons
		btn1.disabled = false;
		btn2.disabled = false;
	}else {
		// sinon on désactive les boutons
		btn1.disabled = true;
		btn2.disabled = true;
	}
	return true;
}
//
function ajouterEventListenerChkcrt() {
	//traitement du formulaire d'envoi des demandes de carte
	var chk = document.getElementsByTagName("INPUT");
	for (var i = 0; i < chk.length; i++) {
		if (chk[i].type == 'checkbox' && chk[i].id.substr(0,6) == 'chkcrt') {
			chk[i].addEventListener('click',ctrlBtnCartes);
		}
	}
	return true;
}

ajouterEventListenerChkcrt();


//ajouter des gestionnaires d'évenement blur sur les formulaires de la console afin de supprimer le onblur inline
document.forms.namedItem('recherchecpt').addEventListener('submit',check_formC);
//
document.forms.namedItem('rechercheTRA').addEventListener('submit',check_formT);
//