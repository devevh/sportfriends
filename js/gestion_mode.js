function controleModeSombre(id) {
    let cbx=document.getElementById(id);
    let css=document.getElementById('mode');
    if (css.hasAttribute("href")) {
      if (cbx.checked) {
        //alert ('mode sombre activé');
		//changer la css à appliquer
        css.setAttribute("href","./css/sombre.css");
		//retenir le choix dans un cookie qui expire dans 1000 jours
		setCookie("sportfriends_mode", "sombre", 1000,"/");
      }
      else {
        //alert ('mode par défaut activé');
        css.setAttribute("href","./css/defaut.css");
		//retenir le choix dans un cookie qui expire dans 1000 jours
		setCookie("sportfriends_mode", "defaut", 1000,"/");
      }
	}
 }

function setCookie(cname, cvalue, exdays, cpath) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=" + cpath + ";SameSite=strict";
}
