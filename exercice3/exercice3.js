const couleurs = ["white", "blue", "red", "green", "yellow", "pink"];

//Bouton changer de couleur
BtnChangerCouleur = document.getElementById('changerCouleur');

//Fond du div
let FondDiv = document.getElementById('zone');



//fonction qui fait en sorte que la zone du div change de couleur
function fonction_changer_couleur(){

    RandomColor = couleurs[Math.floor(Math.random() * couleurs.length)];

    FondDiv.style.backgroundColor = RandomColor;
}


//lors du clique du bouton, la fonction "fonction_changer_couleur" s'éxecute
BtnChangerCouleur.addEventListener("click", fonction_changer_couleur);

