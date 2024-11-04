let BtnAjouter = $('#ajouterBtn');

//liste
let liste = $("maListe");


function ajouter(){



    //valeur entrée dans le input
    let valeurInput = $('#nouvelElement').val;

    //créer un élément <li>
    let li = $('<li>').text(valeurInput);

    //ajouter le nouveau élément dans la liste
    liste.append(li);

    // Vider le input une fois le bouton a été cliqué
    //valeurInput.text("");

}



//action lorsqu'on clique sur le bouton ajouter
BtnAjouter.click(ajouter);