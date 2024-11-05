//bouton afficher/masquer
let BtnAfficherMasquer = $("#toggleBtn");

//texte à afficher/masquer
let paragraphe = $("p");


// action lorsqu'on clique sur le bouton afficher/masquer
$(BtnAfficherMasquer).click(function CacherAfficher(){


    //si (le display du texte n'est pas affiché)
    if (paragraphe.css('display')!== 'none'){
        paragraphe.css('display', 'none');
    } else {
        paragraphe.css('display', 'block');
    }

});