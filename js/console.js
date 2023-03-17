//indicateur de complétude de formulaire de recherche
// sur evenement de perte de focus, on vérifie si au moins un critère n'est pas vide
// tant qu'aucun n'est renseigné alors le bouton de recherche est grisé
function check_form1() {
	//traitement du formulaire de recherche des comptes
	//alert "form recherche compte";
	var btn = document.getElementById("subrechcpte");
	var nom = document.getElementById("cnom");
	var tel = document.getElementById("ctelephone");
	var cli = document.getElementById("cclient");
	var dis = document.getElementById("cdistrib");
	var tax = document.getElementById("ctaxi");
	var ope = document.getElementById("cope");
	var adm = document.getElementById("cadmin");
	//windows.confirm("nom:"+nom.value+"telephon:"+tel.value+"client:"+cli.checked+"distrib:"+dis.checked+"taxi:"+tax.checked+"opra:"+ope.checked+"admin:"+adm.checked);
	//si rien n'est renseigné
	if ((nom.value == "") and (tel.value == "") and (!cli.checked and !dis.checked !tax.checked and !ope.checked and !adm.checked)) {
		//alert("rien n'est renseigné, bouton désactivé");
		btn.disabled = true;
		return false;
	}
	else {
		btn.disabled = false;
		return true;
	}
}
function check_form2() {
	//traitement du formulaire de recherche des transactions
		var btn = document.getElementById("subrechtran");
		var nom = document.getElementById("tnom");
		var tel = document.getElementById("ttelephone");
		var cli = document.getElementById("tclient");
		var dis = document.getElementById("tdistrib");
		var tax = document.getElementById("ttaxi");
		var paie = document.getElementById("tpaie");
		var actv = document.getElementById("tactv");
		var chgt = document.getElementById("tchgt");
		var vrsm = document.getElementById("tvrsm");
		var encs = document.getElementById("tencs");
		//si rien n'est renseigné
		if ((nom.value == "") and (tel.value == "") and (!cli.checked and !dis.checked !tax.checked) and (!paie.checked and !actv.checked and !chgt.checked and !vrsm.checked and !encs.checked)) {
			btn.disabled = true;
		}
		else {
			btn.disabled = false;
		}
}