// Fonction pour ajouter une image à la galerie
document.getElementById('ajouterImageBtn').addEventListener('click', function() {
    const imageURL = document.getElementById('imageURL').value;  // Récupérer l'URL de l'image entrée

    if (imageURL) {
        // Créer un conteneur pour l'image
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        // Créer un élément img et lui attribuer l'URL
        const img = document.createElement('img');
        img.src = imageURL;
        img.alt = 'Image ajoutée';

        // Créer un bouton de suppression
        const supprimerBtn = document.createElement('button');
        supprimerBtn.classList.add('supprimerBtn');
        supprimerBtn.textContent = 'Supprimer';

        // Ajouter un événement pour supprimer l'image
        supprimerBtn.addEventListener('click', function() {
            imageContainer.remove();  // Supprimer le conteneur d'image de la galerie
        });

        // Ajouter l'image et le bouton de suppression au conteneur
        imageContainer.appendChild(img);
        imageContainer.appendChild(supprimerBtn);

        // Ajouter le conteneur à la galerie
        document.getElementById('galerie').appendChild(imageContainer);

        // Vider le champ de texte pour une nouvelle URL
        document.getElementById('imageURL').value = '';
    } else {
        alert('Veuillez entrer une URL d\'image valide.');
    }
});
