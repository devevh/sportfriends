//*********************************************************************************************************
//appel de propagationCP en AJAX
document.getElementById('sub_propagCPS').onclick = function () {
	//alert("clic sur sub_propagCPA");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
			//alert('retour propagationCP.php:'+this.responseText);
			document.getElementById('retourA').innerHTML = this.responseText;
		}
	};
	var url = "propagationCP.php";
	var id = document.getElementById('id_agent_payeurA').value;
	var propagCP = document.getElementById('propagCPA').value;
	//alert ("id="+id+"&propagCP="+propagCP);
	xhttp.open("POST", url, true);
	xhttp.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
	xhttp.send("id="+id+"&propagCP="+propagCP);
};