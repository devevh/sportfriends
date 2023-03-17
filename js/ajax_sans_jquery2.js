// ********************************************************************************************
// Fonction pour déterminer le navigateur utilisé et ainsi créer le bon objet XMLHttpRequest  *
// ********************************************************************************************
function getXhr()
{
	var xhr = null; 
 
	if(window.XMLHttpRequest) // Firefox et autres
	   xhr = new XMLHttpRequest(); 
	else if(window.ActiveXObject){ // Internet Explorer 
	   try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
	}
	else { // XMLHttpRequest non supporté par le navigateur 
	   alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest..."); 
	   xhr = false; 
	} 
	return xhr;
}
 
// *******************************************************************************
// Fonction qui sera appelée sur le clic des cases à cocher                      *
// *******************************************************************************
function modif(clique)
{
	// Appel de la fonction de determination de l'objet
	var xhr = getXhr();
 
	// Determine l'ajout ou la suppression
	if (document.getElementById(clique).checked) {
		// Ajout d'une inscription
		var afaire = "inscription";
 
	}else{
		// Demande de confirmation de suppression
		if (confirm("Voulez-vous vraiment supprimer cette personne : "+clique+" ?"))
		{
			// Suppression
			var afaire = "desinscription";
		}else{
			// On recoche la case
			document.getElementById(clique).checked=true;
			// on quitte la fonction
			return;
		}
	}
 
	// Appel de la page de traitement php
	xhr.open("POST","validationInscription.php",true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	// envoi des arguments à la page php
	xhr.send("monmatricule="+clique+"&afaire="+afaire);
}