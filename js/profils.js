//clic sur se connecter pour afficher la modale du formulaire de connexion
document.getElementById('P1').addEventListener('click',function(){
    document.getElementById('modaleAfficherProfilP1').style.display='block';
});
//clic sur le x pour fermer la modale de connexion
document.getElementById('fermerAfficherProfilP1').addEventListener('click',function(){
    document.getElementById('modaleAfficherProfilP1').style.display='none';
});
//clic sur se connecter pour afficher la modale du formulaire de connexion
document.getElementById('P2').addEventListener('click',function(){
    document.getElementById('modaleAfficherProfilP2').style.display='block';
});
//clic sur le x pour fermer la modale de connexion
document.getElementById('fermerAfficherProfilP2').addEventListener('click',function(){
    document.getElementById('modaleAfficherProfilP2').style.display='none';
});

/*
appel ajax de la fonction de récupération du profil dont l'identifiant est passé en paramètre
le retour de l'ajax remplace le contenu des tags dont l'id se termine par 'Friend'

document.getElementById('contenuModaleProfil').innerHTML=text;
document.getElementById('modaleAfficherProfil').style.display='block';

text contient :
      <header class="w3-container w3-theme-l1 w3-center"> 
        <h2 id="pseudoFriend">Pseudo P1</h2>
        <span id="fermerAfficherProfil" class="w3-button w3-display-topright">×</span>
      </header>
      <!-- pour afficher les messages -->
      <span id="infoAfficherProfil"></span>
      <section id="afficherFriend" class="w3-row w3-center">
        <div class="w3-col w3-padding-large">
          <img id="avatarFriend" src="./images/profil-768x890.png" alt="Pseudo" class="logo w3-badge">
        </div>
      <!-- age, sexe, ville, abonnement, objectif -->
        <div class="w3-col s4">
          <p id="ageFriend">Age</p>
        </div>
        <div class="w3-col s4">
          <p id="sexeFriend">Sexe</p>
        </div>
        <div class="w3-col s4">
          <p id="villeFriend">Ville</p>
        </div>
        <div class="w3-col s6">
          <p id="abonnementFriend">Abonnement</p>
        </div>
        <div class="w3-col s6">
          <p id="objectifFriend">Objectif</p>
        </div>
      </section>
      <footer class="w3-container w3-theme-l1 w3-center">
        <p>
          <a href="./message.php?friend=pseudoFriend">Message</a> <!--
          - <a href="./masquerprofil.php?friend=pseudoFriend">Masquer</a> -->
        </p>
      </footer>
  
*/
//*********************************************************************************************************
//
function recupInfosProfil(friend) {
  //alert("clic sur le profil "+friend);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('contenuModaleProfil').innerHTML=this.responseText;
      document.getElementById('modaleAfficherProfil').style.display='block';
    }
  };
  var url = "./action/recup_infos_friend.php";
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader ('Content-Type','application/x-www-form-urlencoded');
  xhttp.send("friend="+friend);
};

function ajouterEventListenerProfils() {
  const liste=document.getElementsByClassName("profils");
  for (let i=0;i<liste.length;i++) {
    liste[i].addEventListener('click',function(){recupInfosProfil(liste[i].id)})
  }
};

ajouterEventListenerProfils();