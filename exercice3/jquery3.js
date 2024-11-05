//bouton changer couleur
let BtnChangerCouleur = $("#changerCouleur");

//liste des couleurs
let liste = ["white", "blue", "red", "green", "yellow", "pink"];


//action lorsqu'on clique sur le bouton changer de couleur
$(BtnChangerCouleur).click(function changerCouleur(){

    let RandomColor = liste[Math.floor(Math.random() * liste.length)];

    let divZone = $("#zone");
    divZone.css("background-color", RandomColor);

});

