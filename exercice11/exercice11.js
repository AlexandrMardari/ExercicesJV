// Variable Bouton toggleThemeBtn
let BtnToggleTheme = document.getElementById("toggleThemeBtn");

// Variable pour le h2
let texteH2 = document.getElementById("texteH2");

BtnToggleTheme.addEventListener("click", function(){



    if(document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black";  // Fond sombre
        document.body.style.color = "white";  // Texte clair
        texteH2.textContent = "Mode Sombre";  // Changer le texte du titre
    } else {
        // Passer au mode clair
        document.body.style.backgroundColor = "white";  // Fond clair
        document.body.style.color = "black";  // Texte noir
        texteH2.textContent = "Mode Clair";  // Changer le texte du titre
    }

});