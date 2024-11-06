//bouton calculer age
let BtnCalculerAge = $("#calculerAgeBtn");




// action lorsqu'on clique sur le bouton CalculerAge
BtnCalculerAge.click(function CalculerAge(){

    const annee_naissance = prompt("Veuillez entrer votre année de naissance:", "2000")

    // si l'année entrée n'est pas vide
    if(annee_naissance){

        //*************************************************************//
        const INT_annee_naissance = parseInt(annee_naissance);
        //*************************************************************//



        const year = new Date();
        let annee_actuelle = year.getFullYear();


        //popup qui affiche l'âge calculé
        alert("Vous avez " + (annee_actuelle-annee_naissance) + " ans!")
    }

});