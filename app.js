const  hamburgerButton =document.getElementById("hamburger");
const navlist = document.getElementById("links");

function toggleButton(){
    navlist.classList.toggle('show-links')
}
hamburgerButton.addEventListener('click', (toggleButton))