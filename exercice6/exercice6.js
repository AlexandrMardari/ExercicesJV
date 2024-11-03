let BtnCalculerAge = document.getElementById("calculerAgeBtn");

//fonction qui calcule l'âge selon l'année de naissance indiquée
function CalculerAge(){
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
}

//lors du clique du bouton, la fonction "CalculerAge" s'éxecute

BtnCalculerAge.addEventListener("click", CalculerAge);