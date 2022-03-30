import { home } from "./home";


function header(){

    console.log("the header is here!")

    const contentDiv = document.querySelector("#content")
    const headerCard = document.createElement('div');
 
    const headerContent = `
    <nav id="navBar">
     <button class="tabBtns">Menu</button>
      <button class="tabBtns">Home</button>
       <button class="tabBtns">Contact</button>
    </nav>
    `;
    button.setAttribute("class", "tabBtns");
    headerCard.innerHTML = headerContent;
    contentDiv.appendChild(headerCard)



};




export default header;