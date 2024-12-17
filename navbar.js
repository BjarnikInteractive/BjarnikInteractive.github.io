const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
  console.log('Hamburger wurde geklickt');
  console.log(navUl); // Überprüfen, ob das ul-Element gefunden wird
  navUl.classList.toggle('active');
});
