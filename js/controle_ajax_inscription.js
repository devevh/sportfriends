//***********************************************************************************************************************
$(document).ready(function(){
    $("#pseudo").blur(function(e){ // on ecoute l'evenement Blur du champ pseudo
		e.preventDefault();
		$("#pseudoprofil2").val($("#pseudo").val());
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
				else {if(data == 'OUI'){
						// Le pseudo existe en base. Ajoutons un message dans la page HTML pour informer l'utilisateur.
						$("#infoconnexion").html("<p class='avertissement'><span class='fas fa-times'></span>&nbsp;Pseudo indisponible, veuillez changer ou ajouter des caractères</p>");
					}
					else {
						$("#pseudoprofil").val($("#pseudo").val());
						$("#infoconnexion").html("");
					}
				}
            },
            'text' // Nous souhaitons recevoir "Success" ou "Failed", donc on indique text !
         );
    });
});
//***********************************************************************************************************************
$(document).ready(function(){
    $("#email").blur(function(e){ // on ecoute l'evenement Blur du champ motdepasse
		e.preventDefault();	
        $.post(	
            'pseudo_existe.php', // page appelée, elle répond 'Non' si le motdepasse est incorrect, 'OK' sinon
            {
                pseudo : $("#email").val(),  // Nous récupérons la valeur de nos inputs que l'on fait passer à .php
            },
            function(data){ // Data contient le retour de la requete HTTP
                if(data == 'Vide'){
                     // La requete POST n'a pas abouti.
                     $("#infoconnexion").html("<p class='erreur'>Erreur de requête HTTP</p>");
                }
				else {if(data == 'OUI'){
						// Le pseudo existe en base. Ajoutons un message dans la page HTML pour informer l'utilisateur.
						$("#infoconnexion").html("<p class='avertissement'><span class='fas fa-times'></span>&nbsp;Adresse mail déjà utilisée, veuillez en renseigner une autre</p>");
					}
					else {
						$("#infoconnexion").html("");
					}
				}
            },
            'text' // Nous souhaitons recevoir "Success" ou "Failed", donc on indique text !
         );
    });
});
//***********************************************************************************************************************
$(document).ready(function(){
    $("#telephone").blur(function(e){ // on ecoute l'evenement Blur du champ motdepasse
		e.preventDefault();	
        $.post(	
            'pseudo_existe.php', // page appelée, elle répond 'Non' si le motdepasse est incorrect, 'OK' sinon
            {
                pseudo : $("#telephone").val(),  // Nous récupérons la valeur de nos inputs que l'on fait passer à .php
            },
            function(data){ // Data contient le retour de la requete HTTP
                if(data == 'Vide'){
                     // La requete POST n'a pas abouti.
                     $("#infoconnexion").html("<p class='erreur'>Erreur de requête HTTP</p>");
                }
				else {if(data == 'OUI'){
						// Le pseudo existe en base. Ajoutons un message dans la page HTML pour informer l'utilisateur.
						$("#infoconnexion").html("<p class='avertissement'><span class='fas fa-times'></span>&nbsp;Numéro de téléphone déjà utilisé, veuillez en renseigner un autre</p>");
					}
					else {
						$("#infoconnexion").html("");
					}
				}
            },
            'text' // Nous souhaitons recevoir "Success" ou "Failed", donc on indique text !
         );
    });
});

//***********************************************************************************************************************
$(document).ready(function(){
    $("#parrain").blur(function(e){ // on ecoute l'evenement Blur du champ parrain
		e.preventDefault();
		//uniquement si le champ est renseigné
		if($("#parrain").val() > ''){
        $.post(	
            'pseudo_existe.php', // page appelée, elle répond 'NON' si le parrain est inconnu, 'OUI' sinon
            {
                pseudo : $("#parrain").val(),  // Nous récupérons la valeur de nos inputs que l'on fait passer à .php
            },
            function(data){ // Data contient le retour de la requete HTTP
                if(data == 'Vide'){
                     // La requete POST n'a pas abouti.
                     $("#infoconnexion").html("<p class='erreur'>Erreur de requête HTTP</p>");
                }
				else {if(data == 'NON'){
						// Le pseudo est inconnu en base. Ajoutons un message dans la page HTML pour informer l'utilisateur.
						$("#infoconnexion").html("<p class='avertissement'><span class='fas fa-times'></span>&nbsp;Parrainage : numéro de téléphone inconnu, veuillez vérifier la saisie</p>");
					}
					else {
						$("#infoconnexion").html("");
					}
				}
            },
            'text' // Nous souhaitons recevoir "Success" ou "Failed", donc on indique text !
         );
		}
    });
});
//***********************************************************************************************************************
$(document).ready(function(){
    $("#infoconnexion").click(function(){ // on ecoute l'evenement Click du champ infoconnexion
		$("#infoconnexion").html("");
    });
});