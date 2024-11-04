let BtnModifier = $("#modifierBtn");

//fonction qui fait en sorte que le contenu des éléments h1 et p change
function modifierTextes(){
    $('h1').text('Titre modifié!');
    $('p').text('Le contenu a été modifié avec succès.');
}


//action lorsqu'on clique sur le bouton modifier
$(BtnModifier).click(modifierTextes);