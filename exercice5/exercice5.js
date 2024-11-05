let span = document.getElementById("compteur");

let BtnCliquer = document.getElementById("clicBtn");

//fonction qui fait en sorte que à chaque clique sur le bouton, le compte augmente de 1
function cliquer(){
    let span_valeur_actuelle = parseInt(span.textContent);
    span_valeur_actuelle+=1;

    if(span_valeur_actuelle === 10){
        span_valeur_actuelle = 0
    }

    span.textContent = span_valeur_actuelle;

}

//lors du clique du bouton, la fonction "cliquer" s'éxecute
BtnCliquer.addEventListener("click", cliquer);