import { cupcakes } from './imageURLS'

function homepageContent() {
   
   const homePageText = 
    `<div class = "homeWrapper content">
      <h1 id="homeTitle">Life is Short, Make it Sweet</h1>

         <p id="homeContent">Welcome to the Sweet Shop! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div>
    `;
   
   const homeDiv = document.createElement('div');

   const content = document.querySelector('#content')

   homeDiv.innerHTML = homePageText;
   content.appendChild(homeDiv)
   content.appendChild(cupcakes)
   
}
 
  


    export default homepageContent
