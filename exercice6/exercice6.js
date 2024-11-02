let BtnCalculerAge = document.getElementById("calculerAgeBtn");

function CalculerAge(){
    const annee_naissance = prompt("Veuillez entrer votre année de naissance:", "2000")

    if(annee_naissance){

        const INT_annee_naissance = parseInt(annee_naissance);
        const year = new Date();
        let annee_actuelle = year.getFullYear();


        alert("Vous avez " + (annee_actuelle-annee_naissance) + " ans!")
    }
}


BtnCalculerAge.addEventListener("click", CalculerAge);