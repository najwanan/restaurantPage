
//write tab switching logic and call initial page load logic
//write initial page load function in seperate module 


import { home } from './Components/home.js';
import './Styles/style.css';
import { header, button } from './Components/header.js';
import { loadPage } from './Components/loadPage';

 document.body.appendChild(loadPage)

menuBtn.addEventListener('click', showMenu);

function showMenu() {
   document.body.appendChild(createMenu);
    console.log('shows the menu')
}

console.log('This may or may not be working')