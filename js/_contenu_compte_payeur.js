//*********************************************************************************************************
//appel de propagationCP en AJAX
document.getElementById('sub_propagCPS').onclick = function () {
	//alert("clic sur sub_propagCPA");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
			//alert('retour propagationCP.php:'+this.responseText);
			document.getElementById('retourA').innerHTML = this.responseText;
		}
	};
	var url = "propagationCP.php";
	var id = document.getElementById('id_agent_payeurA').value;
	var propagCP = document.getElementById('propagCPA').value;
	//alert ("id="+id+"&propagCP="+propagCP);
	xhttp.open("POST", url, true);
	xhttp.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
	xhttp.send("id="+id+"&propagCP="+propagCP);
};
//*********************************************************************************************************
//ce script génère le lien vers le CR sélectionné dans la liste déroulante des CR, RAZ si déselection
document.getElementById('listeCR').onchange = function() {
	//alert (document.getElementById('listeCR').selectedIndex);
	var CR = document.getElementById('listeCR').value;
	var texteCR = document.getElementById('listeCR').options[document.getElementById('listeCR').selectedIndex].text;
	var fldst = document.getElementsByTagName("FIELDSET");
	switch(CR) {
		case '-1':
		//document.getElementById('allerCR').innerHTML = '';
		for (var i = 0; i < fldst.length; i++) {
			if (fldst[i].name === 'fldstCR') {
				//si on annule la sélection dans la liste on masque tous le CR
				document.getElementById(fldst[i].parentNode.id).style.display = 'none';
			}
		}
		break;
		
		case '-2':
		for (var i = 0; i < fldst.length; i++) {
			if (fldst[i].name === 'fldstCR') {
				//si on annule la sélection dans la liste on masque tous le CR
				document.getElementById(fldst[i].parentNode.id).style.display = 'block';
			}
		}
		break;
		default :
		for (var i = 0; i < fldst.length; i++) {
			if (fldst[i].name === 'fldstCR') {
				//si le fieldset est celui sélectionné alors on affiche son div parent et on masque tous les autres
				if (CR == i) {
					document.getElementById(fldst[i].parentNode.id).style.display = 'block';
				}
				else {
					document.getElementById(fldst[i].parentNode.id).style.display = 'none';
				}
			}
		}
	}
	/*if (CR == '-1') {
		//document.getElementById('allerCR').innerHTML = '';
		for (var i = 0; i < fldst.length; i++) {
			if (fldst[i].name === 'fldstCR') {
				//si on annule la sélection dans la liste on masque tous le CR
				document.getElementById(fldst[i].parentNode.id).style.display = 'none';				
			}
		}
	}
	else {
		//document.getElementById('allerCR').innerHTML = '<a href="#fldst'+ CR +'">Accéder au compte '+ texteCR +'</a>';
		for (var i = 0; i < fldst.length; i++) {
			if (fldst[i].name === 'fldstCR') {
				//si le fieldset est celui sélectionné alors on affiche son div parent et on masque tous les autres
				if (CR == i) {
					document.getElementById(fldst[i].parentNode.id).style.display = 'block';
				}
				else {
					document.getElementById(fldst[i].parentNode.id).style.display = 'none';
				}
			}
		}
	}*/
};
//*********************************************************************************************************
//ce script genère le paramètre autorisation en concaténant nom+valeur de la checkbox (si cochée 1 sinon 0)
function majAuto(id) {
	var quelform ='';
	quelform = document.getElementById(id).form.id;
	//alert(quelform);
	var frm = document.getElementById(quelform);
	//alert (frm.name+frm.length);
	var chk = frm.getElementsByTagName("INPUT");
	//alert ('chk length:'+chk.length);
	var txtauto ='';
	for (var i = 0; i < chk.length; i++) {
		if (chk[i].type === 'checkbox') {
			//alert('valeur checkbox '+i+' :'+chk[i].value);
			//alert('checkbox '+chk[i].value+' cochée :'+chk[i].checked);
			if (chk[i].checked == true) {
				txtauto += chk[i].value+'1';
			}
			else {
				txtauto += chk[i].value+'0';
			}
			//alert ('autos :'+txtauto);
		}
	}
	frm.elements.namedItem('autorisation').value = txtauto;							
}
//****************************************************************************************************************
function copieautoCP() {
	var autoCR = document.getElementById('autorisationCR');
	var frm = document.getElementById('formMajCP');
	//alert (frm.name+frm.length);
	var chk = frm.getElementsByTagName("INPUT");
	//alert ('chk length:'+chk.length);
	var txtauto ='';
	for (var i = 0; i < chk.length; i++) {
		if (chk[i].type === 'checkbox') {
			//alert('valeur checkbox '+i+' :'+chk[i].value);
			//alert('checkbox '+chk[i].value+' cochée :'+chk[i].checked);
			if (chk[i].checked == true) {
				txtauto += chk[i].value+'1';
			}
			else {
				txtauto += chk[i].value+'0';
			}
			//alert ('autos :'+txtauto);
		}
	}
	autoCR.value = txtauto;							
}
//****************************************************************************************************************
//changer l'intitulé du bouton de chargement du CR si le solde modifié est suffisant
function ajusteBtnCharge(elt) {
	var nouvMnt = elt.value;
	var soldeCP = parseInt(document.getElementById('soldecache').innerHTML);
	//alert ('nouveau montant:'+nouvMnt+' - Solde :'+soldeCP);
	var quelform = document.getElementById(elt.id).form.id;
	var frm = document.getElementById(quelform);
	var sbmt = frm.getElementsByTagName("INPUT");
	for (var i = 0; i < sbmt.length; i++) {
		if (sbmt[i].type === 'submit') {
			//alert('elt.id :'+elt.id+' - form.id :'+quelform+' - submit.id:'+sbmt[i].id);
			if (nouvMnt < soldeCP) {
				//alert('montant inferieur au solde');
				sbmt[i].value = 'Charger le compte rattaché';
				sbmt[i].style.backgroundColor="#0f3052";
				sbmt[i].disabled = false;
			}
			else {
				//alert('montant superieur au solde');
				sbmt[i].value = 'Solde payeur insuffisant';
				sbmt[i].style.backgroundColor="gray";
				sbmt[i].disabled = true;
			}
		}
	}
};
//*********************************************************************************************************
//lorsque la valeur de montant$i (formMtCR$i) change il faut la reporter dans montantCR$i (le montant cache de formParamCR$i)
function copieMtCR(elt) {
	var i = elt.id.substr(7);
	document.getElementById('montantCR'+i).value = elt.value;
};