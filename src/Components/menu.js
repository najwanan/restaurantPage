
const photo = '../Assets/photo'

function createMenu() {
  const menuContent = `
    <h1 id="menuTitle">The Sweet Shop Menu</h1>
    <h3>Food<h3>
    <div class="menu">
      <img src= "" class="sweetImg"><img>
      <img class="sweetImg"><img>
      <h3>Drinks<h3>
      <img class="sweetImg"><img>
    </div>
  
  `;

  const contentDiv = document.querySelector("#content");
  const menuDiv = document.createElement('div');

  menuDiv.innerHTML = menuContent;
  contentDiv.appendChild(menuDiv)

} 

export default createMenu;