<?php
include("./include/_connexion.php");
//controle des informations reçues
if (!empty($_POST)) {
  $friend = test_input($_POST['friend']);
}
else {
  echo "Vide";
  exit();
}
//chercher les infos du profil
$rech_cpte = "select * from profils where profil='$friend'";
if ($rslt_rech_cpte = $mysqli->query($rech_cpte)) {
  $ligne = $rslt_rech_cpte->fetch_assoc();
  if (!empty($ligne)) {
    $pseudo = $ligne['pseudo'];
    $avatar = $ligne['avatar'];
    $age = $ligne['age'];
    $sexe = $ligne['sexe'];
    $ville = $ligne['ville'];
    $abonnement = $ligne['abonnement'];
    $objectif = $ligne['objectif'];
    echo "
      <header class='w3-container w3-theme-l1 w3-center'><h2 id='pseudoFriend'>".$pseudo."</h2><span id='fermerAfficherProfil' class='w3-button w3-display-topright'>×</span></header>
      <span id='infoAfficherProfil'></span>
      <section id='afficherFriend' class='w3-row w3-center'>
        <div class='w3-col w3-padding-large'><img id='avatarFriend' src='./images/".$avatar."' alt='avatar du friend' class='logo w3-badge'></div>
        <div class='w3-col s4'><p id='ageFriend'>".$age."</p></div>
        <div class='w3-col s4'><p id='sexeFriend'>".$sexe."</p></div>
        <div class='w3-col s4'><p id='villeFriend'>".$ville."</p></div>
        <div class='w3-col s6'><p id='abonnementFriend'>".$abonnement."</p></div>
        <div class='w3-col s6'><p id='objectifFriend'>".$objectif."</p></div>
      </section>
      <footer class='w3-container w3-theme-l1 w3-center'><p><a href='./message.php?friend=".$pseudo."'>Message</a></p></footer>";
  }
  else {
      echo "NON";
  }
}
else {
  echo "Query";
}
?>