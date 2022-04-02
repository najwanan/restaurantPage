
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
contactForm();
createMenu();
homepageContent();

window.onload = function() {
     let menubtn = document.querySelector("#menuBtn");
 menubtn.addEventListener("click", menuFunc);
    
 }
   
function menuFunc() {
  console.log("here's the menu");
}



