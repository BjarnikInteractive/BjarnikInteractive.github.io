document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.navbar ul');

    hamburger.addEventListener('click', function() {
        // Toggle 'active'-Klasse, um das Menü zu öffnen/schließen
        menu.classList.toggle('active');
    });
});
