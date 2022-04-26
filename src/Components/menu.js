import { cupcakes } from '../assets/cupcakes_unsplash.jpg';
function createMenu() {
  const menuContent = `
    <div class = "menuDiv content">
    <h1 id="menuTitle">The Sweet Shop Menu</h1>
    <h3>Food<h3>
    <div class="menu">
      <img src={cupcakes} />
      <h3>Drinks<h3>
      <div class= ".strawberry"></div>
    </div>
    </div>
  `;
  /*const createPhoto = document.createElement('img')
  createPhoto.src = './tarts_unsplash.jpg'*/
  const dessertImg = document.createElement('img')
  const contentDiv = document.querySelector("#content");
  const menuDiv = document.createElement('div');

  //dessertImg.setAttribute('src', '../assets/macaroons.jpg')
  menuDiv.innerHTML = menuContent;
  contentDiv.appendChild(menuDiv)
  contentDiv.appendChild(cupcakes)

} 

export default createMenu;