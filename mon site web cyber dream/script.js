// Fonction pour gérer l'envoi du formulaire
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi réel pour cet exemple
    alert('Formulaire envoyé !');
});
