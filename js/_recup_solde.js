//*********************************************************************************************************
if (document.getElementById('afficherliste')) {
document.getElementById('afficherliste').addEventListener('click',function() {
	var divliste = document.getElementById('divliste');
	if (divliste.className.indexOf("w3-show") == -1) {
		divliste.className=divliste.className.replace("w3-hide", "w3-show");
		document.getElementById('afficherliste').innerHTML = "<b>Masquer la liste des transactions</b>";
  } else { 
		divliste.className=divliste.className.replace("w3-show", "w3-hide");
		document.getElementById('afficherliste').innerHTML = "<b>Afficher la liste des transactions</b>";
  };
});
}
//*********************************************************************************************************
document.getElementById('generercsv').addEventListener('click', function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	  var elt = document.getElementById("generercsv");
    if (this.readyState == 4 && this.status == 200) {
		if (this.responseText != "9") {
			if (this.responseText != "0") {
				elt.innerHTML = "<a href='"+this.responseText+"'>Fichier disponible</a>";
			}
			else {
				elt.innerHTML = "Aucune transaction";
			}
		}
		else {
			alert ("retour erreur:"+this.responseText+":");
		}
    }
  };
  var idcpte = this.attributes[0].value;
  var url = "genererCSV.php?id="+idcpte;
  //alert(url);
  xhttp.open("GET", url, true);
  xhttp.send();
});