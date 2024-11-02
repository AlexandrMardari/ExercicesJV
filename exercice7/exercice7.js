let BtnDeviner = document.getElementById("devinerBtn");

let nombre_genere = Math.floor(Math.random() * 10) + 1;



function nombre_aleatoire(){

    const nombre_devine = parseInt(prompt("Veuillez deviner le nombre", "0"));

    if(!isNaN(nombre_genere)){

        if(nombre_devine === nombre_genere){

            alert("Vous avez deviné le nombre!");

        } else if (nombre_devine > nombre_genere){

            alert("Le nombre est trop grand!");

        } else if (nombre_devine < nombre_genere){

            alert("Le nombre est trop petit!");

        }
    } /*else{
        alert("Veuillez entrer un nombre!!!");
    }*/

}

BtnDeviner.addEventListener("click", nombre_aleatoire);