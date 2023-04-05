function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


let css=document.getElementById('mode');
if (css.hasAttribute("href")) {
  if (getCookie("sportfriends_mode") == "sombre") {
    css.setAttribute("href","./css/sombre.css");
  }
  else {
    css.setAttribute("href","./css/defaut.css");
  }
};
