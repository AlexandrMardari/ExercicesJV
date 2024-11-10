// Récupération des éléments du DOM
const carre = document.getElementById('carre');
const zone = document.getElementById('zone');

// Dimensions de la zone
const zoneWidth = zone.offsetWidth;  // 400px
const zoneHeight = zone.offsetHeight;  // 400px

// Dimensions du carré
const carreWidth = carre.offsetWidth;  // 50px
const carreHeight = carre.offsetHeight;  // 50px

// Position initiale du carré
let x = 0;
let y = 0;

// Fonction pour déplacer le carré
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (y > 0) y -= 10;  // Déplacer vers le haut
            break;
        case 'ArrowDown':
            if (y < zoneHeight - carreHeight) y += 10;  // Déplacer vers le bas
            break;
        case 'ArrowLeft':
            if (x > 0) x -= 10;  // Déplacer vers la gauche
            break;
        case 'ArrowRight':
            if (x < zoneWidth - carreWidth) x += 10;  // Déplacer vers la droite
            break;
    }

    // Mise à jour de la position du carré
    carre.style.top = `${y}px`;
    carre.style.left = `${x}px`;
});
