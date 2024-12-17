const navUl = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('active');
  hamburger.classList.toggle('active'); // Optionale visuelle Anpassung für den Hamburger
});

// Optionale Verbesserung: Schließen des Menüs bei Klick auf einen Link (Mobile)
const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) { // Nur auf Mobilgeräten
      navUl.classList.remove('active');
      hamburger.classList.remove('active'); // Optionale Anpassung für den Hamburger
    }
  });
});

// Optionale Verbesserung: Menü bei Resize anpassen (wichtig für Desktop/Mobile Wechsel)
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navUl.classList.contains('active')) {
    navUl.classList.remove('active');
    hamburger.classList.remove('active');
  }
});
