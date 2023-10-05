document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const menuImage = document.getElementById("menu-image");

    menuItems.forEach((item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const imageName = item.getAttribute("data-image");
            menuImage.src = imageName;
            menuImage.style.display = "block";
        });
    });
});

// afficherNomUtilisateur.js

document.addEventListener("DOMContentLoaded", function () {
    // Récupérez le nom d'utilisateur depuis le stockage local
    var nomUtilisateur = localStorage.getItem("nom_utilisateur");

    // Vérifiez si un nom d'utilisateur a été stocké
    if (nomUtilisateur) {
        // Affichez le nom d'utilisateur où vous le souhaitez sur la page
        var nomUtilisateurElement = document.getElementById("nom-utilisateur");
        if (nomUtilisateurElement) {
            nomUtilisateurElement.textContent = "Bonjour, " + nomUtilisateur + " !";
        }
    }
});



