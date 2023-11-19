const imgOne = document.querySelector('.about .images img:first-of-type');
const imgTwo = document.querySelector('.about .images img:last-of-type');

imgOne.addEventListener('mouseover', () => {
    imgOne.src = '../images/me_22.jpg';
});

imgOne.addEventListener('mouseout', () => {
    imgOne.src = '../images/me_2.jpg';
});

imgTwo.addEventListener('mouseover', () => {
    imgTwo.src = '../images/me_11.png';
});

imgTwo.addEventListener('mouseout', () => {
    imgTwo.src = '../images/me_1.jpg';
});
