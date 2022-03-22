import { home } from "./home";


function header(){

    const headerCard = document.getElementById('#headerCard')

    const menuBtn = document.createElement("button");
    menuBtn.setAttribute("class", "tabBtns");
    let text = document.createTextNode("Menu");
    menuBtn.appendChild(text)


    const homeBtn = document.createElement("button");
    homeBtn.setAttribute("class", "tabBtns");
    let text1 = document.createTextNode("Home");
    homeBtn.appendChild(text1);
    headerCard.appendChild(menuBtn);
    headerCard.appendChild(contactBtn);
    console.log("header is working")
};


const button = () => {

        const contactBtn = document.createElement("button");
        contactBtn.setAttribute("class", "tabBtns");
        let text2 = document.createTextNode("Contact");
        contactBtn.appendChild(text2);
    

}


export {
    header, 
    button
}