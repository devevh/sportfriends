//***********************************************************************************************************************
$(document).ready(function(){	
	$("#tritrans").click(function(e){ // on ecoute l'evenement Click du champ ptrans
		e.preventDefault();	
		$.post(	
			'select_param.php', // page appelée, elle retourne la liste des paramètres triée selon la valeur de queltritrans et queltriagent
			{
				tritrans : $("#queltritrans").val(),  // Nous récupérons la valeur de nos inputs que l'on fait passer à .php
				triagent : $("#queltriagent").val()
			},
			function(data){ // Data contient le retour de la requete HTTP
					 $("#tableau").empty().append(data);},
			'html' // datatype
		);
	});
});
//***********************************************************************************************************************