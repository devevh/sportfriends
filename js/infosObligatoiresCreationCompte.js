//fonction qui modifie l'affichage des données du form
function modif_form_creer_compte (i) { 
	var commerce = document.getElementById('commerce');
	var tdcommerce = document.getElementById('tdcommerce');
	var licence = document.getElementById('licence');
	var tdlicence = document.getElementById('tdlicence');
	var horaires = document.getElementById('horaires');
	var tdhoraires = document.getElementById('tdhoraires');
	var adresse = document.getElementById('adresse');
	var tdadresse = document.getElementById('tdadresse');
	var tdzone = document.getElementById('tdzone');
	var elt_all = document.getElementById('T');
	var elt_lbv = document.getElementById('L');
	var elt_aka = document.getElementById('A');
	var elt_owe = document.getElementById('O');
	//--  licence ----------------------
	if (i[0]==0) {
		licence.setAttribute("disabled","");
		licence.removeAttribute("required");
		licence.value = 'NA';
		tdlicence.innerHTML = 'N° Licence';
	}
	else {
		licence.removeAttribute("disabled");
		licence.setAttribute("required","");
		licence.value = '';
		tdlicence.innerHTML = 'N° Licence*';
	}
	//-- horaires ---------------------
	if (i[1]==0) {
		horaires.setAttribute("disabled","");
		horaires.removeAttribute("required");
		horaires.value = 'NA';
		tdhoraires.innerHTML = 'Horaires';
	}
	else {
		horaires.removeAttribute("disabled");
		horaires.setAttribute("required","");
		horaires.value = '';
		tdhoraires.innerHTML = 'Horaires*';
	}
	//-- adresse ---------------------
	if (i[2]==0) {
		adresse.setAttribute("disabled","");
		adresse.removeAttribute("required");
		adresse.value = 'NA';
		tdadresse.innerHTML = 'Adresse';
	}
	else {
		adresse.removeAttribute("disabled");
		adresse.setAttribute("required","");
		adresse.value = 'NA';
		tdadresse.innerHTML = 'Adresse*';
	}
	//-- zone geographique ---------------------
	if (i[3]==0) {
		tdzone.innerHTML = 'Zone géographique';
		//
		elt_all.setAttribute("disabled","");
		elt_all.checked = true;
		elt_lbv.setAttribute("disabled","");
		elt_lbv.checked = false;
		elt_aka.setAttribute("disabled","");
		elt_aka.checked = false;
		elt_owe.setAttribute("disabled","");
		elt_owe.checked = false;
	}
	else {
		tdzone.innerHTML = 'Zone géographique*';
		elt_all.setAttribute("disabled","");
		elt_all.setAttribute("required","");
		elt_all.checked = false;
		elt_lbv.removeAttribute("disabled");
		elt_lbv.checked = false;
		elt_aka.removeAttribute("disabled");
		elt_aka.checked = false;
		elt_owe.removeAttribute("disabled");
		elt_owe.checked = false;
	}
	//-- code commerce -------------------------
	if (i[4]==0) {
		commerce.setAttribute("disabled","");
		commerce.removeAttribute("required");
		//commerce.value = 'NA';
		tdcommerce.innerHTML = 'Code commerçant';
	}
	else {
		commerce.removeAttribute("disabled");
		commerce.setAttribute("required","");
		//commerce.value = '';
		tdcommerce.innerHTML = 'Code commerçant*';
	}	
}
//appel de obtenirIndicateursCreerCompte en AJAX sans jquery
document.getElementById('listeTagent').onclick = function () {
	//initialisation du paramètre passé au php
	var tagent = document.getElementById('listeTagent').value;
	var spanCPCR = document.getElementById('spanCPCR');
	var indicateurs=[];
	if (tagent > "") {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				//le retour du serveur est une chaine de 5 caracteres {0|1} séparés par '|' éventuellement suivie d'une balise html
				indicateurs = this.responseText.split("|",5);
				if (this.responseText.lastIndexOf("|") < this.responseText.length-1) {
					spanCPCR.innerHTML= this.responseText.substr(this.responseText.lastIndexOf("|")+1);
				}
				else {
					spanCPCR.innerHTML= "---";
				}
				modif_form_creer_compte(indicateurs);
			}
		};
		var url = "./action/obtenirIndicateursCreerCompte.php";
		xhttp.open("POST", url, true);
		xhttp.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
		xhttp.send("tagent="+tagent);
	}
};
//*********************************************************************************************************
//validation du formulaire de création de compte
/*
function validerCreation {
	var commerce = document.getElementById('commerce');
	//validation du code commerce si obligatoire
	//si pas de la forme A999 alors c'est un code customisé
}
document.forms.namedItem('formcreerpartenaire').addEventListener('submit',validerCreation);
*/
//*********************************************************************************************************
//objectif : sur le onchange du select des type d'agent on ajuste les informations obligatoires, facultatives ou par défaut
/*
var lstTAgent = document.getElementById('listeTagent');
var spanCPCR = document.getElementById('spanCPCR');
lstTAgent.addEventListener('change', function() {
	var indicateurs=[];
	spanCPCR.innerHTML = '---';
	switch(lstTAgent.value) {
	//en fonction du type agent on alimente le tableau affichage avec autant de poste que d'éléments dans le form creercompte, 
	//les valeurs autorisées sont 0: valeur par défaut, 1:obligatoire
		case 'OP': indicateurs=['0','0','0','0','0']; break;
		case 'DI': indicateurs=['1','1','1','0','1']; 
		spanCPCR.innerHTML = '<label for="DIaccepteP">Accepte les paiements* :</label><input type="checkbox" value="1" name="DIaccepteP" checked >';
		break;
		case 'TX': indicateurs=['1','1','0','1','1']; break;
		case 'HO': indicateurs=['1','1','1','0','1']; break;
		case 'CL': indicateurs=['0','0','1','0','0']; break;
		case 'CP': indicateurs=['0','0','1','0','0']; 
		spanCPCR.innerHTML = 'Type de compte de rattachement* :<input type="radio" id="CPEnt" name="typeCP" value="0" required ><label for="CPE">Entreprise</label>&nbsp;<input type="radio" id="CPFam" name="typeCP" value="1"><label for="">Famille</label>';
		break;
		case 'CR': indicateurs=['0','0','1','0','0']; 
		spanCPCR.innerHTML = '<label for="quelCP">Compte de rattachement (téléphone)* :</label><input type="number" min="010000000" max="099999999" name="quelCP" required >';
		break;
		case 'CO': indicateurs=['1','1','1','0','1']; break;
		default :  indicateurs=['1','1','1','1','1']; if(lstTAgent.value>'  ') {alert('Type agent non paramétré : '+lstTAgent.value);}
	}
	modif_form_creer_compte(indicateurs);
});
*/