const BtnModifier = document.getElementById("modifierBtn");

//lors du clique du bouton, la fonction "fonction_modifier" s'éxecute
BtnModifier.addEventListener("click", fonction_modifier);

let titre = document.getElementById("titre");
let paragraphe = document.getElementById("paragraphe");


//fonction qui modifie les textes des éléments
function fonction_modifier() {
    titre.textContent="Titre modifié!";
    paragraphe.textContent="Le contenu a été modifié avec succès.";
}