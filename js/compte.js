//gerer le l'envoi de la photo d'avatar
if (document.getElementById('btn_enregistreravatar')) {
    document.getElementById('btn_enregistreravatar').addEventListener('click',uploadeFichier('form_profil'));
}
//
function uploadeFichier(formID) {
  let info = document.getElementById('infoUploade');
  let form = document.getElementById(formID);
  let filenode = form.querySelector('[type="file"]');
  let fileObject = filenode.files[0];
  let pseudoProfil = form.querySelector('[name="pseudoprofil"]');
  let formData = new FormData();
  formData.append('file', fileObject);
  formData.append('meetingType', pseudoProfil.value);
  //console.log(formData);
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      //alert(this.responseText);
      switch (this.responseText) {
        case 'TAILLE_KO' :
          info.innerHTML="<p class='information'>Taille de fichier incorrecte.</p>";
          break;
        case 'EXTENSION_KO' :
          info.innerHTML="<p class='information'>Extension de fichier incorrecte.</p>";
          break;
        case 'MOVE_UPLOADED_KO' :
          info.innerHTML="<p class='erreur'>Téléchargement impossible, veuillez recommencer svp.</p>";
          break;
        case 'OK' :
          info.innerHTML="<p class='confirmation'>Profil mis à jour avec succès.</p>";
          break;
        case 'MAJ_PROFIL_KO' :
          info.innerHTML="<p class='erreur'>Erreur lors de la prise en compte du fichier, veuillez recommencer svp.</p>";
          break;
        default :
            info.innerHTML="<p class='erreur'>Erreur non documentée, téléchargement impossible.</p>";
      }
      //traitement js du retour
      return;
    }
  }
  xhr.open('post', 'uploade.php');
  xhr.send(formData);
}