// Hamburger-Menü Logik
document.querySelector('.hamburger').addEventListener('click', function () {
  const navbar = document.querySelector('.navbar ul');  // Greife auf das <ul> der Navbar zu
  navbar.classList.toggle('active');  // Toggle die 'active' Klasse
});
