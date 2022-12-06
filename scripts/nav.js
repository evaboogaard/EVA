const hamburgerButton = document.querySelector('.hamburgerbutton');
const navEl = document.querySelector('nav');

hamburgerButton.addEventListener('click', function activeHamburger() {
  navEl.classList.toggle('active');
});
