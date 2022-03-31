
function createMenu() {
  const menuContent = `
    <h1>The Sweet Shop Menu</h1>
    <h3>Food<h3>
    <img src= "./Assets/cupcakes_unsplash.jpg"class="sweetImg"><img>
    <img class="sweetImg"><img>
    <h3>Drinks<h3>
    <img class="sweetImg"><img>
 
  `;

  const contentDiv = document.querySelector("#content");
  const menuDiv = document.createElement('div');

  menuDiv.innerHTML = menuContent;
  contentDiv.appendChild(menuDiv)

} 

export default createMenu;