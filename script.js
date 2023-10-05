// Sélectionnez tous les boutons de menu
const menuButtons = document.querySelectorAll('.menu-button');

// Sélectionnez tous les éléments de menu
const menuItems = document.querySelectorAll('.menu-item');

// Ajoutez un gestionnaire d'événements à chaque bouton de menu
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        
        // Cachez tous les éléments de menu
        menuItems.forEach(item => {
            item.style.display = 'none';
        });
        
        // Affichez l'élément de menu cible
        const targetItem = document.getElementById(targetId);
        targetItem.style.display = 'block';
    });
});
