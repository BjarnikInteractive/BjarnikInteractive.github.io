document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Toggle die "active"-Klasse zum Anzeigen/Ausblenden des Menüs
});
