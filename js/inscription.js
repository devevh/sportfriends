function creerElement(idParent,typeElement,idElmt,classe,texte) {
	var elmt = document.createElement(typeElement);
	elmt.setAttribute("id", idElmt);
	elmt.setAttribute("class", classe);
	if (texte>"") elmt.appendChild(document.createTextNode(texte));
	document.getElementById(idParent).appendChild(elmt);
}

function creerTag(){
  //recuperer la valeur du texte
  let texte = document.getElementById('tags').value;
  texte = texte.trim();
  //uniquement si une valeur est écrite
  if (texte > '') {
	//boucler sur className('tag') pour avoir le nombre de tag déjà présents et calculer le nouveau numéro
	let collectionTags=document.getElementsByClassName('tag');
	let nouveauNumero=1+collectionTags.length/2;
	let idTag = 'tag'+nouveauNumero;
	//créer le tag
	creerElement('listeTags','span',idTag,'w3-border-radius tag',texte);
	//créer l'icone de suppression du tag
	creerElement(idTag,'i','supp'+idTag,'fa fa-circle-xmark tag','');
	elmt = document.getElementById('supp'+idTag);
	elmt.setAttribute("onclick", "supprimerTag('"+idTag+"')");
	//ajouter la value dans le input hidden, faire un json pour plus de simplicité
	document.getElementById('lestags').value +='§'+idTag+':'+texte;
	//effacer l'input
	document.getElementById('tags').value ='';
  }
}

function supprimerTag(idTag) {
  //identifer le tag à supprimer
  const element = document.getElementById(idTag);
  //parcourir l'ensemble des nodes enfants pour les supprimer
  while (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }
  //supprimer le parent
  element.remove();
  //supprimer la chaine de valeur dans le input hidden
  let h = document.getElementById('lestags');
  //1 recupérer la valeur
  let hv = h.value;
  //2 la découper sur §
  const tabhv= hv.split('§'); //====> attention split crée a minima un tableau de 1 poste qui contient ''
  tabhv.shift();
  let i = 0;
  //3 découper chaque poste sur :
  let tagh = '';
  for (tagh of tabhv) {
	const paireTag = tagh.split(':');
  //4 si tag = idTag alors supprimer le poste avec la methode splice(index,1)
    if (paireTag[0] === idTag) {
	  tabhv.splice(i,1);
	  break;
	}
	i++;
  }
  //5 remplacer la valeur par le tableau
  h.value = "";
  /*for (tag of tablisteTags) {
	texte += '§'+tag;
  }
  texte = '§' + tablisteTags.join('§');*/
  //ecrire uniquement si le tableau n'est pas vide
  if (tabhv[0] > '') {
    h.value = '§' + tabhv.join('§');
  }
}

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