//définir la politique de trustedTypes si l'api est supportée par le navigateur
if (typeof trustedTypes !== 'undefined') {
	const MesRegles = trustedTypes.createPolicy("MesRegles", {
		createHTML(input) {nettoyageHTML(input);},
		createScriptURL(input) {return input;}  // pseuod-securisation en l'absence d'exemple et tant que la simple déclaration dans une fonction provoque une erreur
	});
}

// Accordions
function afficherSousMenu(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function nettoyageHTML(texte) {
//remplace &, <, >, " et ' par le caractère html correspondant, analogue à htmlSpecialChars en php
const sanitize = texte.replace(/&/g, '&amp;')
				.replace(/>/g, '&gt;')
				.replace(/</g, '&lt;')
				.replace(/"/g, '&quot;')
				.replace(/'/g, '&#039;');
return sanitize;
}

//fonction de nettoyage HTML
function TTcreateHTML(politique, texte) {
let HTMLsecurise;
	if (typeof politique !== 'undefined') {
		HTMLsecurise = politique.createHTML(texte);
	}
	else {
		HTMLsecurise = nettoyageHTML(texte);
	}
	return HTMLsecurise;
}

//fonction de nettoyage d'URL
//non fonctionelle : Uncaught TypeError: politique.createScriptURL is not a function at TTcreateScriptURL
/*function TTcreateScriptURL(politique, texte) {
let URLsecurise;
	if (typeof politique !== 'undefined') {
		URLsecurise = politique.createScriptURL(texte);
	}
	else {
		URLsecurise = texte;
	}
	return URLsecurise;
}*/
// register service worker
if ('serviceWorker' in navigator) {
//
// tentative d'appel securisé du service worker
/*	let URLsecurisee;
	URLsecurisee=TTcreateScriptURL("MesRegles", "./sw.js");
	navigator.serviceWorker.register(URLsecurisee).then(function(reg) {*/
	navigator.serviceWorker.register("./js/sw.js").then(function(reg) {

    if(reg.installing) {
      console.log('Service worker installation en cours');
    } else if(reg.waiting) {
      console.log('Service worker installé');
    } else if(reg.active) {
      console.log('Service worker activé');
    }

  }).catch(function(error) {
    // registration failed
    console.log('Registration en erreur ' + error);
  });
}
else {
    // service worker non supporté
    console.log('serviceWorker non supporté');
}

//gestion de l'installation
let deferredPrompt;
const addBtn = document.querySelector('.btnInstall');

//gestion de l'évènement d'installation déclenché par le navigateur
window.addEventListener('beforeinstallprompt', (e) => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Stash the event so it can be triggered later.
	deferredPrompt = e;
	// Update UI to notify the user they can add to home screen
	afficherSousMenu('btnInstall');
	//addBtn.style.display = 'block';

	addBtn.addEventListener('click', () => {
		// hide our user interface that shows our A2HS button
		afficherSousMenu('btnInstall');
		//addBtn.style.display = 'none';
		// Show the prompt
		deferredPrompt.prompt();
		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the A2HS prompt');
				//demande acceptée on ne demandera plus donc plus besoin de stocker l'évènement beforeinstallprompt
				// deferredPrompt = null;
			} else {
				console.log('User dismissed the A2HS prompt');
			}
		});
	});
});