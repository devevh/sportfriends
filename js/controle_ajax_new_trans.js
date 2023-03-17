//***********************************************************************************************************************
$(document).ready(function(){	
	$("#newt_agent").blur(function(e){
		e.preventDefault();	
		if ($("#newt_agent").val() > "") {
		$.post(	
			't_agent_existe.php',
			{
				t_agent : $("#newt_agent").val(),
			},
			function(data){ 
				if(data == 'Vide'){
					$("#infonewtransac").html("<p class='erreur'>Erreur de requête HTTP</p>");
				}
				else {if(data == 'NON'){
					$("#subnewparam").prop('disabled',true);
					$("#infonewtransac").html("<p class='erreur'><span class='fas fa-times'></span>&nbsp;Type agent inconnu : création requise avant de créer la transaction</p>");
					}
					else {
						$("#subnewparam").prop('disabled',false);
						$("#infonewtransac").html("");
					}
				}
			},
			'text'
		)};
	});
});
//***********************************************************************************************************************
$(document).ready(function(){
    $("#infonewtransac").click(function(){ // on ecoute l'evenement Click du champ infoconnexion
		$("#infonewtransac").html("");
		$("#newt_agent").val("");
		$("#subnewparam").prop('disabled',false);
    });
});