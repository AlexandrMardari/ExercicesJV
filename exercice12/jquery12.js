$(document).ready(function() {
    // Récupération des dimensions de la zone et du carré
    const zoneWidth = $('#zone').width();
    const zoneHeight = $('#zone').height();
    const carreWidth = $('#carre').width();
    const carreHeight = $('#carre').height();

    // Position initiale du carré
    let x = 0;
    let y = 0;

    // Gestion des événements de clavier
    $(document).keydown(function(event) {
        switch (event.key) {
            case 'ArrowUp':
                if (y > 0) y -= 10;  // Déplacer vers le haut
                break;
            case 'ArrowDown':
                if (y < zoneHeight - carreHeight) y += 10;  // Déplacer vers le bas sans dépasser
                break;
            case 'ArrowLeft':
                if (x > 0) x -= 10;  // Déplacer vers la gauche
                break;
            case 'ArrowRight':
                if (x < zoneWidth - carreWidth) x += 10;  // Déplacer vers la droite sans dépasser
                break;
        }

        // Mise à jour de la position du carré avec jQuery
        $('#carre').css({
            top: `${y}px`,
            left: `${x}px`
        });
    });
});