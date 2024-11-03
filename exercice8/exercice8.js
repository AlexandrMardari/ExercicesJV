let BtnDemarrerTimer = document.getElementById("demarrerTimerBtn");

let message_paragraphe = document.getElementById("messageTimer");

//Le message est non affiché par défaut
message_paragraphe.style.display = "none";


BtnDemarrerTimer.addEventListener("click", function (){
    setTimeout(message_affiche, 10000);
});


//Fonction qui fait en sorte que le message devient affiché
function message_affiche(){

    message_paragraphe.style.display = "block";

}


