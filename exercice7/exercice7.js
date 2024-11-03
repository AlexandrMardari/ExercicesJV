let BtnDeviner = document.getElementById("devinerBtn");

let nombre_genere = Math.floor(Math.random() * 10) + 1;



//fonction qui compare le nombre généré aléatoirement et le nombre deviné
function nombre_aleatoire(){

    const nombre_devine = parseInt(prompt("Veuillez deviner le nombre", "0"));

    //si le nombre deviné est un int
    if(!isNaN(nombre_devine)){

        if(nombre_devine === nombre_genere){

            alert("Vous avez deviné le nombre!");

        } else if (nombre_devine > nombre_genere){

            alert("Le nombre est trop grand!");

        } else if (nombre_devine < nombre_genere){

            alert("Le nombre est trop petit!");

        }
    } else{
        alert("Veuillez entrer un nombre!!!");
    }

}

//lors du clique du bouton, la fonction "nombre_aleatoire" s'éxecute

BtnDeviner.addEventListener("click", nombre_aleatoire);