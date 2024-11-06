let BtnDeviner = $("#devinerBtn");

const nombre_genere = Math.floor(Math.random() * 10) + 1;


// action lorsqu'on clique sur le bouton deviner
BtnDeviner.click(function DevinerNombre(){

    let nombreEntre = parseInt(prompt("Veuillez deviner le nombre", "0"));

    if(!isNaN(nombreEntre)){

        if(nombreEntre === nombre_genere){
            alert("Bravo! Vous avez deviné le nombre")
        } else if(nombreEntre > nombre_genere){
            alert("Le nombre inscrit est trop grand")
        } else if(nombreEntre < nombre_genere){
            alert("Le nombre inscrit est trop petit")
        }

    } else{
        alert("Veuillez entrer un nombre!")
    }


});