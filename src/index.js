
//write tab switching logic and call initial page load logic
//write initial page load function in seperate module 

import { contactInfo } from './contact.js';
import { homePage } from './home.js';
import { menuLoad } from './menu.js'

import './style.css';
import {menuBtn, homeBtn, contactBtn} from './header'

document.body.appendChild(menuBtn);
document.body.appendChild(homeBtn);
document.body.appendChild(contactBtn);

menuBtn.addEventListener('click', showMenu);

function showMenu(){
    console.log('shows the menu')
}

console.log('This may or may not be working')