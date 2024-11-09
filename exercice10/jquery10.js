// Variable bouton qui affiche l'heure
let BtnAfficherHeure = $("#afficherHeureBtn");

// Variable div (zone qui affiche l'heure)
let divHeure = $("#horloge");



// Fonction qui retourne l'heure au format local
function obtenirHeureLocale(){

    // Variable temps
    const temps = new Date();

    return temps.toLocaleTimeString();

}


// Fonction qui affiche l'heure
function afficherHeure(){

    divHeure.text(obtenirHeureLocale());

}

// Fonction qui affiche l'heure

$(document).ready(function(){

    BtnAfficherHeure.on("click", function(){

        afficherHeure();

    });

    // Fait en sorte que l'heure s'actualise chaque seconde
    setInterval(afficherHeure, 1000);
});






