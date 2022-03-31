
 
//creates Contact Form

const contactForm =() => {
    const contactFormContent = `
    <div>
        <h1>Contact</h1>
        <h3>We'd love to hear from you!</h3>
         <ul>
            <li>Sweet Shop Hours</li>
            <li>Monday-Friday 8am -8pm</li>
            <li>Saturday 9am-8pm</li>
            <li> Sunday 10am-6pm</li>
         </ul>
       
         <h3>Have other questions? Tell us what's on your mind</h3>
        <label>Name</label>
        <input class = "contactFormInput"><input>
        <label>E-mail</label>
        <input class = "contactFormInput"><input>
        <label></label>
        <input class = "contactFormInput"><input>
    </div>
    
    `;

    const contentDiv = document.querySelector("#content");
    const contactFormCon = document.createElement('div')

    contactFormCon.innerHTML = contactFormContent;
    contentDiv.appendChild(contactFormCon)
    
}

export default contactForm