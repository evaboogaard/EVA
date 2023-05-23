const hamburgerButton = document.querySelector('.hamburgerbutton');
const navEl = document.querySelector('nav');
const circle = document.getElementById('circle');

hamburgerButton.addEventListener('click', function activeHamburger() {
  navEl.classList.toggle('active');
  circle.classList.toggle('white');
});
