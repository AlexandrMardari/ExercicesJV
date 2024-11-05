//bouton clique
let BtnCliquer = $("#clicBtn");

//compteur (span)
let compteur = $("#compteur");

// action lorsqu'on clique sur le bouton clique
$(BtnCliquer).click(function AugmenterCompteur(){

    //variable qui transforme le string du span en int
    let spanValeurActuelle = parseInt(compteur.text());
    spanValeurActuelle += 1;


    //condition si le nombre de clics atteint 10, le remettre à 0
    if(spanValeurActuelle === 10){
        spanValeurActuelle = 0;
    }

    //ce qui s'affiche dans le span
    compteur.text(spanValeurActuelle);

});