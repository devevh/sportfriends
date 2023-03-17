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
				//le retour du serveur est une chaine de 5 caracteres {0|1} séparés par ':' éventuellement suivie d'une balise html
				indicateurs = this.responseText.split(":",5);
				if (this.responseText.lastIndexOf(":") < this.responseText.length-1) {
					spanCPCR.innerHTML= this.responseText.substr(this.responseText.lastIndexOf(":")+1);
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