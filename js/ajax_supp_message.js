//*********************************************************************************************************
//appel de supp_message en AJAX sans jquery
document.getElementById('supp_message').onclick = function () {
	//initialisation du paramètre passé au php
	var liste = "";
	var chk = document.getElementsByTagName("INPUT");
	for (var i = 0; i < chk.length; i++) {
		if (chk[i].type == 'checkbox' && chk[i].id.substr(0,3) == 'chk' && chk[i].checked ) {
			liste += chk[i].value;
		}
	}
	if (liste > "") {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				if (this.responseText == 'Vide') {
					document.getElementById('CRsupp').innerHTML = "<p class='erreur'>Erreur de requête HTTP</p>";
				}
				else {
					var message="<p class='information'><span class='fas fa-times'></span>&nbsp;"+this.responseText+" message(s) supprimé(s)</p>";
					document.getElementById('CRsupp').innerHTML = message;
				}
			}
		};
		var url = "./action/supp_message.php";
		xhttp.open("POST", url, true);
		xhttp.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
		xhttp.send("listemessage="+liste);
	}
};
//*********************************************************************************************************
//AJAX sans jquery : reinit de CRsupp
document.getElementById('CRsupp').onclick = function () {
	document.getElementById('CRsupp').innerHTML = "";
};