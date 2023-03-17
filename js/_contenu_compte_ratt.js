//*********************************************************************************************************
function controleAutoPaiement(idcpte,autosCR) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		if (this.responseText != "1") {
			document.getElementById("sbmt").style.backgroundColor = "red";
			document.getElementById("sbmt").value="X Commerçant non autorisé X";
			document.getElementById("sbmt").disabled = true;
		}
		else {
			document.getElementById("sbmt").value="Valider";
			document.getElementById("sbmt").style.backgroundColor = "#0f3052";
			document.getElementById("sbmt").disabled = false;
		}
    }
  };
  var url = "controleAutoPaiement.php?id="+idcpte+"&autosCR="+autosCR;
  xhttp.open("GET", url, true);
  xhttp.send();
}
//*********************************************************************************************************
function resetSBMT() {
	document.getElementById("sbmt").value="Valider";
	document.getElementById("sbmt").style.backgroundColor = "#0f3052";
	document.getElementById("sbmt").disabled = false;
}