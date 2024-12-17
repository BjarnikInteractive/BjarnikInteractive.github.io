const hamburger = document.querySelector('.hamburger'); // Deklaration der Hamburger Variable
const navUl = document.querySelector('.navbar ul');

// Hinzugefügte Überprüfung, ob die Elemente überhaupt gefunden wurden:
if (hamburger && navUl) {
    hamburger.addEventListener('click', () => {
        console.log('Hamburger wurde geklickt'); // Für Debugging
        console.log(navUl); // Für Debugging: Ausgabe des gefundenen Elements
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
