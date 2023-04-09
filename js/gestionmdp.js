function comparemdp() {
  var t1v = document.getElementById("mdp1").value;
  var t2v = document.getElementById("mdp2").value;
  var x=document.getElementById("checkmdp");
  //caractère espace interdit
  t1v = t1v.replaceAll(' ','');
  t2v = t2v.replaceAll(' ','');
  if ((t1v.length > 0) && (t2v.length > 0)) {
    if (t1v != t2v) {
      x.className = "fa fa-times w3-text-red";
    }
    else {
      x.className = "fa fa-check w3-text-green";
    }
  }
  else {
      x.className = "";
  }
}
//
function voirmdp() {
  var linput1 = document.getElementById('mdp1');
  var linput2 = document.getElementById('mdp2');
  var licone = document.getElementById('voir');
  if (linput1.type == 'text') {
    linput1.type = 'password';
    linput2.type = 'password';
    licone.className = "fa fa-eye w3-large";
  }
  else {
    linput1.type = 'text';
    linput2.type = 'text';
    licone.className = "fa fa-eye-slash  w3-large";
  }
}
//

function voirmdp1(numelt) {
  var idinput = 'mdp'+ numelt;
  var idicone = 'voir'+numelt;
  var linput = document.getElementById(idinput);
  var licone = document.getElementById(idicone);
  if (linput.type == 'text') {
    linput.type = 'password';
    licone.innerHTML = "<span class='fa fa-eye' onclick='voirmdp1("+numelt+")' ></span>";      
  }
  else {
    linput.type = 'text';
    licone.innerHTML = "<span class='fa fa-eye-slash' onclick='voirmdp1("+numelt+")' ></span>";
  }
}
//comparaison des mots de passe lors de la perte du focus onblur
document.getElementById('mdp1').addEventListener('blur', comparemdp);
document.getElementById('mdp2').addEventListener('blur', comparemdp);
//afficher les mots de passe en clair lors du clic sur l'oeil
document.getElementById('voir').addEventListener('click',voirmdp);
