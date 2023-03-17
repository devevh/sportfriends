//***********************************************************************************************************************
$(document).ready(function(){
    $("#sub_profil").click(function(e){ // on ecoute l'evenement Blur du champ sub_profil
		e.preventDefault();
		//Get form
        var form = $('#form_profil')[0];

       //Create an FormData object
        var data = new FormData(form);

       //disabled the submit button
        $("#sub_profil").prop("disabled", true);
		$.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "./uploade.php",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {
				switch (data) {
					case 'taille_ko' :
						$("#infouploadprofil").html("<p class='information'>Taille de fichier incorrecte</p>");
						break;
					case 'extension_ko' :
						$("#infouploadprofil").html("<p class='information'>Extension de fichier incorrecte</p>");
						break;
					case 'move_uploaded_ko' :
						$("#infouploadprofil").html("<p class='erreur'>Téléchargement impossible</p>");
						break;
					case 'upload_ok' :
						$("#infouploadprofil").html("<p class='confirmation'>Fichier transmis avec succès</p>");
						break;
					default :
						$("#infouploadprofil").html("<p class='erreur'>Erreur non documentée, téléchargement impossible</p>");
				}
                $("#btnSubmit").prop("disabled", false);

            },
            error: function (e) {

                $("#infouploadprofil").text(e.responseText);
                console.log("ERROR : ", e);
                $("#btnSubmit").prop("disabled", false);

            }
		});
    });
});
//***********************************************************************************************************************
$(document).ready(function(){
    $("#infouploadprofil").click(function(){ // on ecoute l'evenement Click du champ infouploadprofil
		$("#infouploadprofil").html("");
    });
});