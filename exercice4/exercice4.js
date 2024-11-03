let BtnAfficherMasquer = document.getElementById("toggleBtn");

let texte_a_cacher = document.getElementById("texte");


//fonction qui fait en sorte que le texte devient soit caché ou visible à chaque clique
function AfficherMasquer(){
    if (texte_a_cacher.style.display!== 'none'){
        texte_a_cacher.style.display = 'none';
    } else {
        texte_a_cacher.style.display = 'block';
    }
}

//lors du clique du bouton, la fonction "AfficherMasquer" s'éxecute

BtnAfficherMasquer.addEventListener("click", AfficherMasquer);