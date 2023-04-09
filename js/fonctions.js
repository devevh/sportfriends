/**************************************************************************************/
//fonctions appelées
/**************************************************************************************/
function stringToHash(string) {
	var hash = 0;
	if (string.length == 0) return hash;
	for (i = 0; i < string.length; i++) {
		char = string.charCodeAt(i);
		hash = ((hash << 5) - hash) + char;
		hash = hash & hash;
	}
	return hash;
}

let ANNEE=[];
function bissextile(annee) {
	var modulo4, modulo100, modulo400;
	modulo4 = annee - Math.trunc(annee/4)*4;
	//modulo100 = annee - Math.trunc(annee/100)*100;
	modulo400 = annee - Math.trunc(annee/400)*400;
	if (modulo4 != 0 && modulo400 != 0) {
		ANNEE = ANNEENONBI;
	}
	else {
		ANNEE = ANNEEBI;
	}	
}

function creerElement(idParent,typeElement,idElmt,classe,texte) {
	var elmt = document.createElement(typeElement);
	elmt.setAttribute("id", idElmt);
	elmt.setAttribute("class", classe);
	if (texte>"") elmt.appendChild(document.createTextNode(texte));
	document.getElementById(idParent).appendChild(elmt);
}

function creerElementAvantDernier(idParent,typeElement,idElmt,classe,texte) {
	var elmt = document.createElement(typeElement);
	elmt.setAttribute("id", idElmt);
	elmt.setAttribute("class", classe);
	if (texte>"") elmt.appendChild(document.createTextNode(texte));
	var elmtparent=document.getElementById(idParent);
	elmtparent.insertBefore(elmt,elmtparent.lastElementChild);
}

function monreset() {
// effacer les tous input de la page
	var lesinputs = document.getElementsByTagName("input");
	for (input of lesinputs) {
		input.value = "";
	}
}

function trouverIndexOptionSelected(idselect,valeur) {
	var leselect = document.getElementById(idselect);
	let i=0, index=-1;
	//parcourir la liste des options
	for (i=0; i<leselect.length; i++) {
		if (leselect[i].value == valeur) {
			index = i;
			break;
		}
	}
	return index;
}
//*************************************************************************************************
function afficherColis() {
//affiche la liste des colis enregistrés
var colisTXT="", colisJSON="", listeColisTAB=[], colisTAB=[], idcolis="", colis="";
var dateEnCours="", DateEC="", d = new Date(), aujourdhui="";
var descr="";

var AAAA = d.getFullYear();
var MM = d.getMonth();
var JJ = d.getDate();
MM = parseInt(d.getMonth());//recuperer la valeur numérique
MM += 1;
MM = MM.toString().padStart(2,'0'); //padder au debut avec des 0 pour obtenir une chaine de longueur 2
JJ = JJ.toString().padStart(2,'0');
var aujourdhui = AAAA+"/"+MM+"/"+JJ;
var ecrireHR1fois = 0;

	if (localStorage.getItem('envois') > "") {
		listeColisTAB = localStorage.getItem('envois').split(",");
		for (idcolis of listeColisTAB) {
			colisTXT = localStorage.getItem(idcolis);
			colisJSON = JSON.parse(colisTXT);
			colisTAB.push(colisJSON.datexp+idcolis);
		}
		colisTAB.sort();//tri sur AAAA/MM/JJaaaa-mm-jjThh:mm:ssZ
		for (colis of colisTAB) {
			idcolis = colis.substr(10);//recup idcolis aaaa-mm-jjThh:mm:ssZ
			colisTXT = localStorage.getItem(idcolis);
			colisJSON = JSON.parse(colisTXT);
			if (colisJSON.datexp != DateEC) { //rupture sur datexp => ecrire l'entete d'expedition
				//reduire les dates passées
				if (colisJSON.datexp < aujourdhui) {
					creerElement('envois','div',colisJSON.datexp,'w3-container w3-margin-top','');
					creerElement(colisJSON.datexp,'header','header'+colisJSON.datexp,'w3-left-align','Envoi du '+colisJSON.datexp+' ');
					creerElement('header'+colisJSON.datexp,'img','supp'+colisJSON.datexp,'w3-img','');
						elmt = document.getElementById('supp'+colisJSON.datexp);
						elmt.setAttribute("src", "./images/poubelle.jpg");
						elmt.setAttribute("onclick", "supprimerExpedition('"+colisJSON.datexp+"')");
						elmt.setAttribute("height", "16px");
					creerElement('header'+colisJSON.datexp,'span','span'+colisJSON.datexp,'w3-badge w3-grey','v');
						elmt = document.getElementById('span'+colisJSON.datexp);
						elmt.setAttribute("onclick", "afficherSousMenu2('"+colisJSON.datexp+"')");
					creerElement(colisJSON.datexp,'div','detail'+colisJSON.datexp,'w3-container w3-hide','');
					ecrireHR1fois++;
				}
				else {
					if (ecrireHR1fois === 1) {
						creerElement('envois','hr','','w3-hr','');
						ecrireHR1fois++;
					}
					creerElement('envois','div',colisJSON.datexp,'w3-container w3-margin-top','');
					creerElement(colisJSON.datexp,'header','header'+colisJSON.datexp,'w3-left-align','Envoi du '+colisJSON.datexp+' ');
					creerElement('header'+colisJSON.datexp,'span','span'+colisJSON.datexp,'w3-badge w3-grey','^');
						elmt = document.getElementById('span'+colisJSON.datexp);
						elmt.setAttribute("onclick", "afficherSousMenu2('"+colisJSON.datexp+"')");
					creerElement(colisJSON.datexp,'div','detail'+colisJSON.datexp,'w3-container w3-show','');
				}
				DateEC = colisJSON.datexp;
			}
			//traitement systématique, ecrire le detail de chaque colis dans l'expédition
			creerElement('detail'+colisJSON.datexp,'div',idcolis,'','');
			creerElement(idcolis,'p','p'+idcolis,'','');
			//pouvoir modifier uniquement les expéditions futures
			if (colisJSON.datexp > aujourdhui) {
				creerElement('p'+idcolis,'img','modif'+idcolis,'w3-img','');
					elmt = document.getElementById('modif'+idcolis);
					elmt.setAttribute("src", "./images/crayon.jpg");
					elmt.setAttribute("onclick", "modifier('"+idcolis+"')");
					elmt.setAttribute("height", "16px");
			}
			creerElement('p'+idcolis,'span','nomexp'+idcolis,'w3-margin-right',colisJSON.nomexp+' ('+colisJSON.telexp+')');
			creerElement('p'+idcolis,'span','nomdest'+idcolis,'w3-margin-right',colisJSON.nomdest+' ('+colisJSON.teldest+')');
			creerElement('p'+idcolis,'span','lieu'+idcolis,'w3-margin-right',colisJSON.lieudest);
			creerElement('p'+idcolis,'span','span'+idcolis,'w3-badge w3-blue','v');
				elmt = document.getElementById('span'+idcolis);
				elmt.setAttribute("onclick", "afficherSousMenu2('"+idcolis+"')");
			//tronquer la description à xx caractères avec ajout de '...' à la fin si réellement tronquée
			if (colisJSON.desc.length > 25) {
				descr = colisJSON.desc.substr(0,22)+"...";
			}
			else {
				descr = colisJSON.desc;
			}
			creerElement('p'+idcolis,'div','detail'+idcolis,'w3-container w3-hide w3-text-grey w3-small',descr+' - '+colisJSON.poids+'kg - '+colisJSON.montant+'€');
		}
	}
}


function enregistrerDatesActives() {
//enregistre les dates activées
	//parcourir la liste des td :
	//  ajouter en stockage local si coché et non existant
	//  supprimer si non coché et existant
	var annee = document.getElementById("annee").value;
	var mois = document.getElementById("mois").value;
	var anneeMois = annee +'-'+ mois;
	var lesJoursActifs=[]; //tableau des jours actifs pour anneeMois
	var anneeMoisActif; //JSON qui associe anneeMois et lesJoursActifs
	var listedatesTAB=[];
	var lesjours = document.getElementsByTagName("td");
	var i, k;
	//recherche de anneeMois dans datesactives	
	if (localStorage.getItem("datesactives") > "") {
		listedatesTAB = localStorage.getItem("datesactives").split(",");
		for (i = 0; i < listedatesTAB.length; i++) {
			if (listedatesTAB[i] == anneeMois) {
				localStorage.removeItem(anneeMois);
				listedatesTAB.splice(i,1);
				listedatesTAB.sort();
				break;
			}
		}
	}
	//lecture des td pour recupérer les jours actifs de anneeMois
	for (i = 0; i < lesjours.length; i++) {
		if (lesjours[i].innerHTML != "") {
			//uniquement les cases qui contiennent une date
			if (lesjours[i].className.indexOf("date-active") >= 0) {
				//si jour est actif alors ajout dans tableau
				lesJoursActifs.push(lesjours[i].innerHTML);
			}
		}
	}
	//si des jours sont activés dans anneMois on ajoute anneeMois dans datesactives et les jours dans anneeMois
	if (lesJoursActifs.length > 0) {
		listedatesTAB.push(anneeMois);
		listedatesTAB.sort();
		localStorage.setItem("datesactives",listedatesTAB);
		localStorage.setItem(anneeMois,lesJoursActifs);
	}
	//affichage confirmation
	afficherConfirmation();
}

//ajouter nouveau lieu
function ajouterLieu(lelieu) {
	var leslieux = document.getElementsByClassName("lieu");
	var lesLieuxActifs=[];
	if (lelieu != '') {
		//ajouter la case à cocher du nouveau lieu dans le fieldset listelieux avant la ligne qui permet d'ajouter un lieu
		creerElementAvantDernier('listelieux','div','div'+lelieu,'w3-row','');
		creerElement('div'+lelieu,'div','divinput'+lelieu,'w3-col s2','');
		//ajouter l'input
		creerElement('divinput'+lelieu,'input',lelieu,'lieu','');
		//définir les attributs spécifiques de l'input pour préciser le type checkbox
		elmt=document.getElementById(lelieu);
			elmt.setAttribute("type", "checkbox");
			elmt.setAttribute("name", lelieu);
			elmt.setAttribute("value", lelieu);
		creerElement('div'+lelieu,'div','divlabel'+lelieu,'w3-col s10 w3-left-align','');
		//ajouter le label de l'input
		creerElement('divlabel'+lelieu,'label','label'+lelieu,'',lelieu);
		elmt=document.getElementById('label'+lelieu);
			elmt.setAttribute("for", lelieu);
		//raz sur la valeur de l'input nouveauLieu
		document.getElementById('nouveauLieu').value='';
		//enregistrer le nouveau lieu
		if (localStorage.getItem("nouveauxlieux") > "") {
			nvxLieuxTAB = localStorage.getItem("nouveauxlieux").split(",");
			if (!(nvxLieuxTAB.indexOf(lelieu) >= 0)) {
				nvxLieuxTAB.push(lelieu);//on ajoute le nouveau lieu si pas présent
				nvxLieuxTAB.sort();
			}
			localStorage.removeItem("nouveauxlieux");
			localStorage.setItem("nouveauxlieux",nvxLieuxTAB);
		}
		else {
			localStorage.setItem("nouveauxlieux",lelieu);
		}
	}
	//affichage confirmation
	afficherConfirmation();
}

function enregistrerLieuxActifs() {
//enregistre les lieux activés
	//parcourir la liste des checkbox  :
	//  ajouter en stockage local si coché et non existant
	//  supprimer si non coché et existant
	var lieuxActifs, lesLieuxActifs=[];
	var leslieux = document.getElementsByClassName("lieu");
	
	for (i = 0; i < leslieux.length; i++) {
		if (leslieux[i].checked) {
			//uniquement les cases cochées
			lesLieuxActifs.push(leslieux[i].value);
		}
	}
	if (lesLieuxActifs.length == 0) {
		if (confirm('Etes-vous sûr(e) de vouloir désactiver touts les lieux ?')) {
			localStorage.removeItem("lieuxactifs");
		}
	}
	else {
		localStorage.removeItem("lieuxactifs");
		localStorage.setItem("lieuxactifs",lesLieuxActifs);
	}
	//affichage confirmation
	afficherConfirmation();
}

//************************************************************************
//usage futur : geolocalisation
/*
var p=document.getElementById('affichePosition');
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    p.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  p.innerHTML = "Latitude: " + position.coords.latitude + " - Longitude: " + position.coords.longitude;
}
getLocation();
*/