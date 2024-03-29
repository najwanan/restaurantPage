
 
//creates Contact Form

const contactForm =() => {
    const contactFormContent = `
    <div class = "contactForm content">

        <h1>Contact</h1>
        <br>
        <h3>We'd love to hear from you!</h3>
         <ul class="shopHours">
            <li>Sweet Shop Hours</li>
            <li>Monday-Friday 8am -8pm</li>
            <li>Saturday 9am-8pm</li>
            <li> Sunday 10am-6pm</li>
         </ul>
        <br>
       
         <h3>Have other questions? Tell us what's on your mind</h3>
         <div class="mailForm">
         <br>
            <label>Name</label>
            <input class ="contactFormInput">
            <label>E-mail</label>
            <input class ="contactFormInput">
            <label>Your Comments Here</label>
            <textarea name = "comment" class="contactFormInput" ></textarea>
         </br>
         </div>
      
    </div>
    
    `;

    const contentDiv = document.querySelector("#content");
    const contactFormCon = document.createElement('div')

    contactFormCon.innerHTML = contactFormContent;
    contentDiv.appendChild(contactFormCon)
    
}

export default contactForm