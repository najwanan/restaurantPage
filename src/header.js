
let menuBtn = document.createElement("button");
menuBtn.setAttribute("class", "tabBtns");
let text = document.createTextNode("Menu");
menuBtn.appendChild(text)
let homeBtn = document.createElement("button");
homeBtn.setAttribute("class", "tabBtns");
let text1 = document.createTextNode("Home");
homeBtn.appendChild(text1);
let contactBtn = document.createElement("button");
contactBtn.setAttribute("class", "tabBtns");
let menuBar = document.createElement("div");
//menuBar.setAttribute("class", "menuBar");


export {
    menuBt, homeBtn, contactBtn
}