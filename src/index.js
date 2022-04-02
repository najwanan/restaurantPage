
//write tab switching logic and call initial page load logic
//write initial page load function in seperate module 

import './Styles/style.css';
import contactForm from './Components/contact';
import header from './Components/header';
import createMenu from './Components/menu';
import homepageContent from './Components/home';

//


const homebtn = document.querySelector('#homeBtn')



header();

homepageContent();

window.onload = function () {
 let contactbtn = document.querySelector("#contactBtn");
 let menubtn = document.querySelector("#menuBtn");
    menubtn.addEventListener("click", createMenu);
    contactbtn.addEventListener('click', contactForm)

 }
   
function menuFunc() {
 createMenu();
}

function loadContact() {
     contactForm();
    
}




