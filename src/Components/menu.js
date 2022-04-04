import '../Assets/fresh-strawberry.jpg'

function createMenu() {
  const menuContent = `
    <h1 id="menuTitle">The Sweet Shop Menu</h1>
    <h3>Food<h3>
    <div class="menu">
      <img src= "../Assets/cupcakes_unsplash.jpg" class="sweetImg"/>
      
      <h3>Drinks<h3>
     
    </div>
  
  `;

  const contentDiv = document.querySelector("#content");
  const menuDiv = document.createElement('div');

  menuDiv.innerHTML = menuContent;
  contentDiv.appendChild(menuDiv)

} 

export default createMenu;