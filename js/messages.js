function afficheConversation(id) {
  //calcul du code conversation visé
  let conversation = id.split("_");
  // split() renvoie un tableau
  //collection des elements qui appellent la classe conversation
  const convs = document.getElementsByClassName("conversation");
  // on boucle en testant l'id des éléments
  for (x of convs) {
    //si id est celui passé en paramètre
    if (x.id === conversation[1]) {
	  //alors on remplace hide par show
      if ((x.className.indexOf(" w3-show") == -1) && (x.className.indexOf(" w3-hide") > 0)) {
        x.className = x.className.replace(" w3-hide"," w3-show");
      }
      if ((x.className.indexOf(" w3-show") == -1) && (x.className.indexOf(" w3-hide") == -1)) {
        x.className += " w3-show";
      }
	}
	// sinon on met hide
	else {
      if ((x.className.indexOf(" w3-show") > 0) && (x.className.indexOf(" w3-hide") == -1)) {
	    x.className = x.className.replace(" w3-show", " w3-hide");
      }
      if ((x.className.indexOf(" w3-show") == -1) && (x.className.indexOf(" w3-hide") == -1)) {
        x.className += " w3-hide";
      }
	}
  }
  //collection des elements qui appellent la classe item_conversation
  const iconvs = document.getElementsByClassName("item_conversation");
  // on boucle en testant l'id des éléments
  for (y of iconvs) {
    //si id est celui passé en paramètre
    if (y.id === id) {
	  //alors on ajoute bord_epais
      if (y.className.indexOf(" w3-border-2") == -1) {
	    y.className = y.className.replace(" w3-border", " w3-border-2")
      }
	}
	// sinon on supprime bord_epais
	else {
      if (y.className.indexOf(" w3-border-2") > 0) {
	    y.className = y.className.replace(" w3-border-2", " w3-border");
      }
	}
  }
  // gestion du form d'envoie du message
  // affecter la bonne id 
  document.getElementById("ajout_message_conversation").value = conversation[1];
}