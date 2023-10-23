document.addEventListener("DOMContentLoaded", function(){
    // Traduire "Next" et "Previous"
    let nextBtn = document.querySelector('.right-next');
    let prevBtn = document.querySelector('.left-prev');

    
    if (nextBtn) {
        nextBtn.textContent = 'Suivant';
    }
    if (prevBtn) {
        prevBtn.textContent = 'Précédent';
    }

    // Traduire la barre de recherche
    let searchInput = document.querySelector('[placeholder="Search this book..."]');
    if (searchInput) {
        searchInput.setAttribute("placeholder", "Chercher dans ce livre...");
    }
});
