import React from "react";
import { TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";
import ContactForm from './contactform';

function Contact() {
    return (
        <div className="contact-info">
            <div>
                <h1>Let's Build Together!</h1>
                <div>
                    <a href="https://www.linkedin.com/in/taulantismailgeci/" target="_blank" rel="noopener noreferrer" className="social-icons" aria-label="Click to visit my LinkedIn profile.">
                        <TbBrandLinkedin size={125} />
                    </a>
                    <a href="https://www.github.com/gecitgit" target="_blank" rel="noopener noreferrer" className="social-icons" aria-label="Click to visit my GitHub profile.">
                        <TbBrandGithub size={125} />
                    </a>
                </div>
                <p>Feel free to explore my projects and professional journey.</p>
                <p style={{ fontWeight: "bolder", fontSize: "1.2rem"}}>Drop Me a Message:</p>
                <p>Whether you have a question, project idea, or just want to say hi, I'd love to hear from you!</p>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;