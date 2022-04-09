
function createMenu() {
  const menuContent = `
    <h1 id="menuTitle">The Sweet Shop Menu</h1>
    <h3>Food<h3>
    <div class="menu">
     
      <h3>Drinks<h3>
      <div class= ".strawberry"></div>
    </div>
  `;
  /*const createPhoto = document.createElement('img')
  createPhoto.src = './tarts_unsplash.jpg'*/
 
  const contentDiv = document.querySelector("#content");
  const menuDiv = document.createElement('div');

  menuDiv.innerHTML = menuContent;
  contentDiv.appendChild(menuDiv)
  contentDiv.appendChild(createPhoto)

} 

export default createMenu;