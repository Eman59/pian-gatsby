import React from 'react'
import "./styles.css"

const ContactSidebar = () => {
    const handleContactOverlay = (e) => {
        let body = document.querySelector('body');
        let contactWrapper = document.querySelector('.contact-wrapper');
        e.preventDefault();
        body.classList.remove('active');
        contactWrapper.classList.remove('active');
    }

    const handleContactCloseBtn = (e) => {
        let body = document.querySelector('body');
        let contactWrapper = document.querySelector('.contact-wrapper');
        e.preventDefault();
        body.classList.remove('active');
        contactWrapper.classList.remove('active');
    }

    return (
        <section class="contact-wrapper">
            <div class="contact-wrapper-overlay" onClick={handleContactOverlay}></div>
            <div class="contact-wrapper-main">
                <button class="close-contact" onClick={handleContactCloseBtn}><i class="fa-solid fa-xmark"></i></button>
                <div class="contact-wrapper-form">
                    <p class="md:mb-4 mb-2 text-white">P.O. BOX 123 <br />Melbourne, VIC, 3000</p>
                    <p class="md:mb-4 mb-2 text-white">0400 000 000</p><a href="#"
                        class="text-white">hello@tensq.com.au</a>
                </div>
                <form>
                    <input type="text" placeholder="Name" /> <input type="text" placeholder="Phone Number" /> <input type="text" placeholder="Email Address" /> <textarea placeholder="Notes (optional)" rows="7"></textarea> <button type="submit" class="main-btn">Send</button>
                </form>
            </div>
        </section>
    )
}

export default ContactSidebar