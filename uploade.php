<?php
include("../include/_cookie.php");
include("../include/_connexion.php"); 
include("../include/_recup_session.php");
if (!empty($_POST)) {
	$pseudo = $_POST['pseudoprofil'];
}
else {
	//erreur
	Header("Location:https://devevh.github.oi/sportfriends/index.html");
}
//nom et repertoire final
$uploaddir = './uploads/';
//recuperer l'extension
$fichierrecu = basename($_FILES['userfile']['name']);
$info = pathinfo($fichierrecu);
$extension = $info['extension'];
$uploadfile = "profil_".$pseudo.".".$extension;
$ajout_profil = "update profils set img_profil ='$uploadfile' where pseudo='$pseudo' ";
$uploadfile = $uploaddir.$uploadfile;
//controle de la taille
if ($_FILES['userfile']['size'] > 30000 and $_FILES['userfile']['size'] < 2000000) {
		//controle de l'extension
	if ($extension === 'png' or $extension === 'jpg') {
		//copie vers le fichier définitif
		if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
			//mise à jour table agent pour ajouter la photo de profil
			if ($rslt_ajout_profil = $mysqli->query($ajout_profil)) {
				//update ok			
				if (!empty($SESid_agent)) {
					//Header("Location:https://devevh.github.oi/sportfriends/index.html");
					echo "OK";
				}
				else {
					//Header("Location:https://devevh.github.oi/sportfriends/index.html");
					echo "MAJ_PROFIL_KO";
				}
			}
			else {
				echo "QUERY_KO";
				//echo "<p class='erreur'></span>Erreur de mise à jour du profil. <br /><a href='connexion.html'>Connectez vous</a></p>";
			}
		} 
		else {
			echo "MOVE_UPLOADED_KO";
			//echo "<p class='erreur'>Erreur non documentée, téléchargement impossible. <br /><a href='connexion.html'>Connectez vous</a></p>";
			print_r($_FILES);
		}
	}
	else {		
		//echo "L'extension du fichier n'est pas conforme";
		echo "EXTENSION_KO";
		//echo "<p class='avertissement'>Extension de fichier incorrecte. <br /><a href='connexion.html'>Connectez vous</a></p>";
		exit;
	}
}
else {
	//echo "La taille du fichier n'est pas conforme";
	//echo "<p class='avertissement'>Taille de fichier incorrecte. <br /><a href='connexion.html'>Connectez vous</a></p>";
	echo "TAILLE_KO";
	exit;
}
?>