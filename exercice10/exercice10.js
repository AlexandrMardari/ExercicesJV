let BtnAfficherHeure = document.getElementById("afficherHeureBtn");

let div_horloge = document.getElementById("horloge");


//fonction qui retourne l'heure locale
function obtenirHeureLocale(){
    const heureActuelle = new Date();
    return heureActuelle.toLocaleTimeString(); // Retourne l'heure au format local

}

//fonction qui affiche l'heure
function afficherHeure(){
    div_horloge.textContent = obtenirHeureLocale();
}

BtnAfficherHeure.addEventListener("click", afficherHeure);

//fait en sorte que l'heure s'actualise chaque seconde
setInterval(afficherHeure, 1000);