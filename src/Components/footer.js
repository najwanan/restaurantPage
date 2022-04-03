
function footer() {
    
    const footerContent = `
     <div id='footerContainer'>
      
         <h4>Menu</h4>
         <h4>Hours</h4>
         <h4>Contact</h4>
         <h4>Locations</h4>
       
     </div>
    `;

    const content = document.querySelector('#content')
    const addFooter = document.createElement('div');
    addFooter.innerHTML = content;
    content.appendChild(addFooter)
    
}

export default footer