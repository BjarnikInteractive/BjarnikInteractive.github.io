const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.navbar ul');

if (hamburger && navUl) { // WICHTIG: Überprüfung, ob die Elemente gefunden wurden
    hamburger.addEventListener('click', () => {
        console.log('Hamburger wurde geklickt'); // Zum Debuggen
        console.log(navUl); // Zum Debuggen
        navUl.classList.toggle('active');
        hamburger.classList.toggle('active'); // Optionale visuelle Anpassung
    });

    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navUl.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navUl.classList.contains('active')) {
            navUl.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
} else {
    console.error("Hamburger oder Navigations-UL nicht gefunden! Überprüfe die Selektoren im JavaScript und das HTML.");
}
