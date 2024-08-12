const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('nav.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}