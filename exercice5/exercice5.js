let span = document.getElementById("compteur");

let BtnCliquer = document.getElementById("clicBtn");

function cliquer(){
    let span_valeur_actuelle = parseInt(span.textContent);
    span_valeur_actuelle+=1;
    span.textContent = span_valeur_actuelle;
}

BtnCliquer.addEventListener("click", cliquer);