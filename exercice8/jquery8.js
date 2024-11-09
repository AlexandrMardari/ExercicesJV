// Variable bouton demarrer
let BtnDemmarer = $("#demarrerTimerBtn");

// Variable message_paragraphe
let message_paragraphe = $("#messageTimer");

// Par défaut le message est invisible
message_paragraphe.hide();

$(document).ready(function(){

    BtnDemmarer.on("click", function(){
        setTimeout(function() {
            message_paragraphe.show();
        }, 10000);
    })
});