document.addEventListener('DOMContentLoaded', function() {
  // Hamburger Menu und das ul-Element der Navbar holen
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.navbar ul');

  // Event Listener für das Klicken auf das Hamburger-Symbol
  hamburger.addEventListener('click', function() {
    // Toggle 'active'-Klasse, um das Menü zu öffnen/schließen
    menu.classList.toggle('active');
  });
});
