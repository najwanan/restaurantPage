
function footer() {
    
     const content = document.querySelector("#content");
     const addFooter = document.createElement("div");
    
    const footerContent = `
     <div id='footerContainer'>
      
         <h4>Menu</h4>
         <h4>Hours</h4>
         <h4>Contact</h4>
         <h4>Locations</h4>
       
     </div>
    `;

    addFooter.innerHTML = footerContent;
    content.appendChild(addFooter)
    
}

export default footer