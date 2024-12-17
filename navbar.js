const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.navbar ul');

if (hamburger && navUl) { // Überprüfung, ob die Elemente gefunden wurden
  hamburger.addEventListener('click', () => {
    console.log('Hamburger wurde geklickt');
    console.log(navUl); // Ausgabe des ul-Elements in der Konsole
    navUl.classList.toggle('active');
  });
} else {
  console.error("Hamburger oder Navigations-UL nicht gefunden!");
}
