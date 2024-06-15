/*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    /* Menu show */
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu');
        });
    }
    /* Menu hidden */
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu');
        });
    }
});



/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SHADOW HEADER ===============*/

const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage=document.getElementById('contact-message')

const sendEmail =(e) =>{
    e.preventDefault()

    emailjs.sendForm('service_jwphoqh','template_86jxx6w','#contact-form','puyrV1Wfz-5k_NRlK')
        .then(()=>{
            //show sent message
            contactMessage.textContent='Message sent Succesfully ✅'
            // remove message after 5 seconds
            setTimeout(()=>{
                contactMessage.tetxcontent=''
            }, 5000)

            //clear fields
            contactForm.reset()
        },()=>{
            //show error message
            contactMessage.textContent='Message not sent (service error) ❌'
        }
        )

}
contactForm.addEventListener('submit',sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
