//*********************************************************************************************************
//appel de majCarte en AJAX sans jquery
document.getElementById('envcartes').onclick = function () {
	//initialisation du paramètre passé au php
	var liste = "";
	var chk = document.getElementsByTagName("INPUT");
	for (var i = 0; i < chk.length; i++) {
		if (chk[i].type == 'checkbox' && chk[i].id.substr(0,6) == 'chkcrt' && chk[i].checked ) {
			liste += chk[i].value;
		}
	}
	if (liste > "") {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById('infocrt').innerHTML = this.responseText;
				const delai = setTimeout(location.reload(),5000);
			}
		};
		var url = "./action/envoiLotCarte.php";
		xhttp.open("POST", url, true);
		xhttp.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
		xhttp.send("liste="+liste);
	}
};
//*********************************************************************************************************
//appel de majCarte en AJAX sans jquery
document.getElementById('majcartes').onclick = function () {
	//initialisation du paramètre passé au php
	var liste = "";
	var chk = document.getElementsByTagName("INPUT");
	for (var i = 0; i < chk.length; i++) {
		if (chk[i].type == 'checkbox' && chk[i].id.substr(0,6) == 'chkcrt' && chk[i].checked ) {
			liste += chk[i].value;
		}
	}
	if (liste > "") {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById('infocrt').innerHTML = this.responseText;
				const delai = setTimeout(location.reload(),5000);
			}
		};
		var url = "./action/majLotCarte.php";
		xhttp.open("POST", url, true);
		xhttp.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
		xhttp.send("liste="+liste);
	}
};
//*********************************************************************************************************
//AJAX sans jquery : reinit de infocrt
document.getElementById('infocrt').onclick = function () {
	document.getElementById('infocrt').innerHTML = "";
};