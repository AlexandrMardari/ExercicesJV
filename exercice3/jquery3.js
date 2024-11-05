let BtnChangerCouleur = $("#changerCouleur");

let liste = ["white", "blue", "red", "green", "yellow", "pink"];


$(BtnChangerCouleur).click(function changerCouleur(){

    RandomColor = liste[Math.floor(Math.random() * liste.length)];

    let divZone = $("#zone");
    divZone.css("background-color", RandomColor);

});

