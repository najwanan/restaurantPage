
//write tab switching logic and call initial page load logic
//write initial page load function in seperate module 



import './Styles/style.css';
import contactForm from './Components/contact';
import header from './Components/header';
import createMenu from './Components/menu';
import homepageContent from './Components/home';

//

const menubtn = document.querySelector('#menuBtn')
const homebtn = document.querySelector('#homeBtn')







header();


contactForm();
createMenu();
homepageContent();



