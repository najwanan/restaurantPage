
//write tab switching logic and call initial page load logic
//write initial page load function in seperate module 

import './Styles/style.css';
import contactForm from './Components/contact';
import header from './Components/header';
import createMenu from './Components/menu';
import homepageContent from './Components/home';
import footer from './Components/footer';
//


const homebtn = document.querySelector('#homeBtn')

//loads header

header();
//loads homepage content default content
homepageContent();

//function forEach tab when it's clicked removes class list and adds new one. 
window.onload = function () {
 let contactbtn = document.querySelector("#contactBtn");
 let menubtn = document.querySelector("#menuBtn");
    menubtn.addEventListener("click", createMenu);
    contactbtn.addEventListener('click', contactForm)

 }
   
function menuFunc() {
    let mainContentDiv = document.querySelector('#content')
    mainContentDiv.classList.add('active')
    createMenu();
}

function loadContact() {
    contactForm();
 
}

footer();



