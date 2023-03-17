function desactiveBtnInscription() {
var btnS = document.getElementById("btn_inscription");
//alert('clic reset');
btnS.disabled = true;
};
//
function prendreconsentement() {
var chkC = document.getElementById("chk_consentementGV");
var btnS = document.getElementById("btn_inscription");
if (chkC.checked == true) {
    btnS.disabled = false;
    }
else {
    btnS.disabled = true;
    }
}
//gerer le consentement lors de l inscription
if (document.getElementById('chk_consentementGV')) {
	document.getElementById('chk_consentementGV').addEventListener('click',prendreconsentement);
}
//desactivation du bouton de validation si reset du formulaire d inscription
if (document.getElementById('formsinscrire')) {
	document.getElementById('formsinscrire').addEventListener('reset',desactiveBtnInscription);
}
//
//*********************************************************************************************************
//appel de pseudo_existe en AJAX sans jquery
if (document.getElementById('pseudo')) {
	document.getElementById('pseudo').onblur = function () {
	//initialisation du paramètre passé au php
	var pseudo = document.getElementById('pseudo').value;
	pseudo=TTcreateHTML('MesRegles', pseudo);
	var ctrl=document.getElementById('controle');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if (this.responseText == 'Query') {
				ctrl.innerHTML = "Erreur de requête XHR pseudo_existe";
			}
			else {
				if (this.responseText == 'OUI') {
					ctrl.innerHTML = "Le pseudo <b>"+pseudo+"</b> n'est pas disponible";
					ctrl.className="w3-text-red";
					document.getElementById('pseudo').focus();
				}
				else {
					ctrl.innerHTML = "";
					ctrl.className="";
				}
			}
		}
	};
	var url = "./pseudo_existe.php";
	xhttp.open("POST", url, true);
	xhttp.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
	xhttp.send("pseudo="+pseudo);
};
}
//
//*********************************************************************************************************
//appel de telephone_existe en AJAX sans jquery
if (document.getElementById('telephone')) {
	document.getElementById('telephone').onblur = function () {
	//initialisation du paramètre passé au php
	var tel = document.getElementById('telephone').value;
	tel=TTcreateHTML('MesRegles', tel);
	var ctrl=document.getElementById('controle');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			switch (this.responseText) {
				case 'Query' :
					ctrl.innerHTML = "Erreur de requête XHR telephone_existe";
					break;
				case 'NAN' :
					ctrl.innerHTML = "Numéro non valide, inscrire uniquement des chiffres sans espace";
					ctrl.className="w3-text-red";
					document.getElementById('telephone').focus();
					break;
				case 'OUI' :
					ctrl.innerHTML = "Le numéro <b>"+tel+"</b> est déjà utilisé par un autre compte WANDI";
					ctrl.className="w3-text-red";
					document.getElementById('telephone').focus();
					break;
				default :
					ctrl.innerHTML = "";
					ctrl.className="";
			}
		}
	};
	var url = "./telephone_existe.php";
	xhttp.open("POST", url, true);
	xhttp.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
	xhttp.send("telephone="+tel);
};
}
//
//*********************************************************************************************************
//appel de telephone_existe en AJAX sans jquery pour le parrain
if (document.getElementById('parrain')) {
	document.getElementById('parrain').onblur = function () {
	//initialisation du paramètre passé au php
	var tel = document.getElementById('parrain').value;
	tel=TTcreateHTML('MesRegles', tel);
	var telt = document.getElementById('telephone').value;
	var ctrl=document.getElementById('controle');
	var xhttp = new XMLHttpRequest();
	//uniquement si le parrain est renseigné
	if (tel > '' && tel != telt) {
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				switch (this.responseText) {
					case 'Query' :
						ctrl.innerHTML = "Erreur de requête XHR telephone_existe";
						break;
					case 'NAN' :
						ctrl.innerHTML = "Numéro non valide, inscrire uniquement des chiffres sans espace";
						ctrl.className="w3-text-red";
						document.getElementById('parrain').focus();
						break;
					case 'NON' :
						ctrl.innerHTML = "Le numéro <b>"+tel+"</b> est inconnu";
						ctrl.className="w3-text-red";
						document.getElementById('parrain').focus();
						break;
					default :
						ctrl.innerHTML = "";
						ctrl.className="";
				}
			}
		};
		var url = "./telephone_existe.php";
		xhttp.open("POST", url, true);
		xhttp.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
		xhttp.send("telephone="+tel);
	}
	if (tel > '' && tel == telt) {
		ctrl.innerHTML = "Auto-parrainage interdit";
		ctrl.className="w3-text-red";
		document.getElementById('parrain').value = "";
		document.getElementById('parrain').focus();
	}
};
}
//
//*********************************************************************************************************
//appel de email_existe en AJAX sans jquery
if (document.getElementById('email')) {
	document.getElementById('email').onblur = function () {
	//initialisation du paramètre passé au php
	var email = document.getElementById('email').value;
	email=TTcreateHTML('MesRegles', email);
	var ctrl=document.getElementById('controle');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if (this.responseText == 'Query') {
				ctrl.innerHTML = "Erreur de requête XHR email_existe";
			}
			else {
				if (this.responseText == 'OUI') {
					ctrl.innerHTML = "L'email <b>"+email+"</b> est déjà utilisé par un autre compte WANDI";
					ctrl.className="w3-text-red";
					document.getElementById('email').focus();
				}
				else {
					ctrl.innerHTML = "";
					ctrl.className="";
				}
			}
		}
	};
	var url = "./email_existe.php";
	xhttp.open("POST", url, true);
	xhttp.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
	xhttp.send("email="+email);
};
}