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