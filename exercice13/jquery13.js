$(document).ready(function() {
    $('#genererBtn').click(function() {
        // Récupérer les valeurs des champs
        const nom = $('#nom').val();
        const email = $('#email').val();
        const couleurFond = $('#couleurFond').val();

        // Vérifier si le nom et l'email sont remplis
        if (nom === '' || email === '') {
            alert('Veuillez remplir tous les champs (nom et email).');
            return; // Arrêter l'exécution si un champ est vide
        }

        // Mettre à jour le contenu de la carte avec les valeurs saisies
        $('#carteNom').text(nom);
        $('#carteEmail').text(email);

        // Appliquer la couleur de fond à la carte
        $('#carte').css('background-color', couleurFond);

        // Afficher la carte (initialement cachée)
        $('#carte').fadeIn();
    });
});
