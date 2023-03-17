//***********************************************************************************************************************
/*$(document).ready(function(){
    $('#supp_param').click(function(){ // on ecoute l'evenement click du champ supp_param
		//recuperer le nombre total de messages
		var $imax = $("#borneP").val();
		//initialisation du paramètre passé au php
		var $liste = "(";
		//on parcourt l'ensemble des checkbox
        for ($i=1;$i<=$imax;$i++) {
			var $chk="#chxP"+$i;
			var $j=0;
			//si la checkbox est cochée
			if ($($chk).is(':checked')) {
				//on récupère sa valeur dans le paramètre POST
				if ($j == 1) {
					$liste += "," + $($chk).val();
				}
				else {
					$liste += $($chk).val();
				}
				$j=1;
			}
		}
		$liste += ")";
		//préparation de la requete POST
        $.post(	
            'supp_param.php', // page appelée, elle répond combien de message(s) ont été supprimé(s)
            {
				listeparam : $liste,  // Nous récupérons la valeur de nos inputs que l'on fait passer à .php
            },
            function(data){ // Data contient le retour de la requete HTTP
                if(data == 'Vide'){
                     // La requete POST n'a pas abouti.
                     $("#CRsuppP").html("<p class='erreur'>Erreur de requête HTTP</p>");
                }
				else {
                     // Succès. Ajoutons un message dans la page HTML pour informer l'utilisateur.
					 var $message="<p class='information'><span class='fas fa-times'></span>&nbsp;"+data+" message(s) supprimé(s)</p>";
                     $("#CRsuppP").html($message);
                }
            },
            'text' // nature du retour : text
        );
	});
});*/
//*********************************************************************************************************
//appel de supp_param en AJAX sans jquery
document.getElementById('supp_param').onclick = function () {
	//initialisation du paramètre passé au php
	var liste = "(";
	var chkP = document.getElementsByTagName("INPUT");
	for (var i = 0; i < chkP.length; i++) {
		var j = 0;
		if (chkP[i].type == 'checkbox' && chkP[i].id.substr(0,4) == 'chxP' && chkP[i].checked ) {
			//on récupère sa valeur dans le paramètre POST
			if (j == 1) {
				liste += "," + chkP[i].value;
			}
			else {
				liste += chkP[i].value;
				$j=1;
			}
		}
	}
	if (liste > "") {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				if (this.responseText == 'Vide') {
					document.getElementById('CRsuppP').innerHTML = "<p class='erreur'>Erreur de requête HTTP</p>";
				}
				else {
					var message="<p class='information'><span class='fas fa-times'></span>&nbsp;"+this.responseText+" paramètre(s) supprimé(s)</p>";
					document.getElementById('CRsuppP').innerHTML = message;
				}
			}
		};
		var url = "./action/supp_param.php";
		xhttp.open("POST", url, true);
		xhttp.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
		xhttp.send("listeparam="+liste);
	}
};
//*********************************************************************************************************
//Sans jquery : reinit de CRsuppP
document.getElementById('CRsuppP').onclick = function () {
	document.getElementById('CRsuppP').innerHTML = "";
};