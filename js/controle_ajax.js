//***********************************************************************************************************************
$(document).ready(function(){
    $("#pseudo").blur(function(e){ // on ecoute l'evenement Blur du champ pseudo
		e.preventDefault();	
        $.post(	
            'pseudo_existe.php', // page appelée, elle répond 'Non' si le pseudo est disponible, 'Existe' sinon
            {
                pseudo : $("#pseudo").val(),  // Nous récupérons la valeur de nos inputs que l'on fait passer à .php
            },
            function(data){ // Data contient le retour de la requete HTTP
                if(data == 'Vide'){
                     // La requete POST n'a pas abouti.
                     $("#infoconnexion").html("<p class='erreur'>Erreur de requête HTTP</p>");
                }
				else {if(data == 'NON'){
                     // Le pseudo n'existe pas en base. Ajoutons un message dans la page HTML pour informer l'utilisateur.
                     $("#infoconnexion").html("<p class='erreur'>Pseudo inconnu</p>");
					 //$("#pseudo").style.backgroundColor="#ff0000";
					 //$("#pseudo").className = "nom de la classe";
                }}
            },
            'text' // Nous souhaitons recevoir "Success" ou "Failed", donc on indique text !
         );
    });
});
//***********************************************************************************************************************
$(document).ready(function(){
    $("#motdepasse").blur(function(e){ // on ecoute l'evenement Blur du champ motdepasse
		e.preventDefault();	
        $.post(	
            'controle_mdp.php', // page appelée, elle répond 'Non' si le motdepasse est incorrect, 'OK' sinon
            {
                mdp : $("#motdepasse").val(),  // Nous récupérons la valeur de nos inputs que l'on fait passer à .php
            },
            function(data){ // Data contient le retour de la requete HTTP
				switch (data) {
				case 'Vide': {
                     // La requete POST n'a pas abouti.
                     $("#infoconnexion").html("<p class='erreur'>Erreur de requête HTTP</p>");
					}
					break;
				case 'NON_agent':{
                     // compte non trouvé. Ajoutons un message dans la page HTML pour informer l'utilisateur.
                     $("#infoconnexion").html("<p class='avertissement'>L'identifiant saisi est incorrect</p>");
					}
					break;
				case 'NON_mdp':{
                     // Le mot de passe est incorrect. Ajoutons un message dans la page HTML pour informer l'utilisateur.
                     $("#infoconnexion").html("<p class='avertissement'>Le mot de passe saisi est incorrect</p>");
					}
					break;
				case 'Query_agent':{
                     // La requete POST n'a pas abouti.
                     $("#infoconnexion").html("<p class='erreur'>Erreur de requête SQL</p>");
					}
					break;
				case 'Query_mdp':{
                     // La requete POST n'a pas abouti.
                     $("#infoconnexion").html("<p class='erreur'>Erreur de requête SQL</p>");
					}
					break;
				case 'OUI':
					//mot de passe correct
					break;
				default:
					//
				}
            },
            'text' // Nous souhaitons recevoir "Success" ou "Failed", donc on indique text !
         );
    });
});