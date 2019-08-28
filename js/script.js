const drop = document.querySelector('.drop');
const navLinks = document.querySelector('.nav-links');
const Links = document.querySelector('.nav-links li');

drop.addEventListener('click',() =>{
    navLinks.classList.toggle('open');
})