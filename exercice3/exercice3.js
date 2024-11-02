const couleurs = ["white", "blue", "red", "green", "yellow", "pink"];

//Bouton changer de couleur
BtnChangerCouleur = document.getElementById('changerCouleur');

//Fond du div
let FondDiv = document.getElementById('zone');



function fonction_changer_couleur(){

    RandomColor = couleurs[Math.floor(Math.random() * couleurs.length)];

    FondDiv.style.backgroundColor = RandomColor;
}


BtnChangerCouleur.addEventListener("click", fonction_changer_couleur);

