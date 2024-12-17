// Hamburger Menü klicken
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Toggle der 'active' Klasse bei Klick
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
