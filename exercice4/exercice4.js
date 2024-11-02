let BtnAfficherMasquer = document.getElementById("toggleBtn");

let texte_a_cacher = document.getElementById("texte");


function AfficherMasquer(){
    if (texte_a_cacher.style.display!== 'none'){
        texte_a_cacher.style.display = 'none';
    } else {
        texte_a_cacher.style.display = 'block';
    }
}

BtnAfficherMasquer.addEventListener("click", AfficherMasquer);