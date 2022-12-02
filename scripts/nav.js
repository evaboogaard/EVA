const hamburgerButton = document.querySelector('.hamburgerbutton');
const hamburgerMenu = document.querySelector('.hamburger');

hamburgerButton.addEventListener('click', function activeHamburger() {
  hamburgerMenu.classList.toggle('active');
});
