// Récupération des éléments du DOM
const remplirBtn = document.getElementById('remplirBtn');
const progress = document.getElementById('progress');
let pourcentage = 0; // Initialisation de la valeur du pourcentage

// Fonction pour remplir progressivement la barre
remplirBtn.addEventListener('click', () => {
    // On désactive le bouton pour éviter plusieurs clics avant la fin de l'animation
    remplirBtn.disabled = true;

    // Créer une fonction pour augmenter la largeur de la barre progressivement
    const interval = setInterval(() => {
        if (pourcentage < 100) {
            pourcentage += 1; // Augmenter de 1% à chaque intervalle
            progress.style.width = pourcentage + '%'; // Mettre à jour la largeur de la barre
            progress.textContent = pourcentage + '%'; // Mettre à jour le texte à l'intérieur de la barre
        } else {
            // Lorsque 100% est atteint, arrêter l'intervalle
            clearInterval(interval);
            // Réactiver le bouton après 1 seconde pour permettre un nouveau clic
            setTimeout(() => {
                remplirBtn.disabled = false;
            }, 1000);
        }
    }, 30); // Chaque 30 millisecondes, augmenter de 1%
});
