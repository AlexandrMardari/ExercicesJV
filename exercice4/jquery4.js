//bouton afficher/masquer
let BtnAfficherMasquer = $("#toggleBtn");

//texte à afficher/masquer
let paragraphe = $("p");


// action lorsqu'on clique sur le bouton afficher/masquer
$(BtnAfficherMasquer).click(function CacherAfficher(){

    paragraphe.toggle(500);

});