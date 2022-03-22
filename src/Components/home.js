
const mainContent = document.getElementById('#content')
function home(){
  
    let title = document.createElement("h1");
    title.textContent('The Sweet Shop');
    mainContent.appendChild(title)

    let bodytext = document.createElement("p");
    
     /* <h1>The Sweet Shop</h1>

         <p>Welcome to the Sweet Shop! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/

};

export {home}

