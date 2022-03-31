

function homepageContent() {
   
   const homePageText = 
    `<div class = "homeWrapper">
      <h1>Your destination for Sweetness</h1>

         <p>Welcome to the Sweet Shop! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div>
    `;
   
   const homeDiv = document.createElement('div');

   const content = document.querySelector('#content')

   homeDiv.innerHTML = homePageText;
   content.appendChild(homeDiv)
   
}
 
  


    export default homepageContent
