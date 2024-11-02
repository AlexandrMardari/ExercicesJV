const BtnModifier = document.getElementById("modifierBtn");
BtnModifier.addEventListener("click", fonction_modifier);

let titre = document.getElementById("titre");
let paragraphe = document.getElementById("paragraphe");


function fonction_modifier() {
    titre.textContent="Titre modifié!";
    paragraphe.textContent="Le contenu a été modifié avec succès.";
}