let liste = document.getElementById("maListe");


const BtnAjouter = document.getElementById("ajouterBtn");

//fonction qui ajoute le nouveau élément <li> dans la liste
function fonction_ajouter() {

    let nouveau_element = document.getElementById('nouvelElement').value;

    //création d'un nouveau élément en forme de <li>
    let li = document.createElement('li');

    //contenu du nouvel element
    li.textContent = nouveau_element;

    //ajout de l'élément
    liste.appendChild(li);

    // Vider le input une fois le bouton a été cliqué
    document.getElementById('nouvelElement').value='';
}

//lors du clique du bouton, la fonction "fonction_ajouter" s'éxecute
BtnAjouter.addEventListener("click", fonction_ajouter);