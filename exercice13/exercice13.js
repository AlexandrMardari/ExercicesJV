document.getElementById('genererBtn').addEventListener('click', function() {
    // Récupérer les valeurs des champs
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const couleurFond = document.getElementById('couleurFond').value;

    // Vérifier si le nom et l'email sont remplis
    if (nom === '' || email === '') {
        alert('Veuillez remplir tous les champs (nom et email).');
        return; // Arrêter l'exécution si un champ est vide
    }

    // Mettre à jour le contenu de la carte avec les valeurs saisies
    document.getElementById('carteNom').textContent = nom;
    document.getElementById('carteEmail').textContent = email;

    // Appliquer la couleur de fond à la carte
    document.getElementById('carte').style.backgroundColor = couleurFond;

    // Afficher la carte (initialement cachée)
    document.getElementById('carte').style.display = 'block';
});
