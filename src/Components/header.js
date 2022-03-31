import { home } from "./home";


function header(){



    const contentDiv = document.querySelector("#content")
    const headerCard = document.createElement('div');
 
    const headerContent = `
    <nav id="navBar">
    <h1 id="header">The Sweet Shop<h1>
     <button class="tabBtns" id="menuBtn">Menu</button>
      <button class="tabBtns" id="homeBtn">Home</button>
       <button class="tabBtns" id="contactBtn">Contact</button>
    </nav>
    `;

    headerCard.innerHTML = headerContent;
    contentDiv.appendChild(headerCard)
};




export default header;