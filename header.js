const navE1 = document.querySelector('.nav'); 
const hamburgerE1 = document.querySelector('.hamburger');

hamburgerE1 .addEventListener('click', () => {
    navE1.classList.toggle('nav-open');
    hamburgerE1.classList.toggle('hamburger-open');
});