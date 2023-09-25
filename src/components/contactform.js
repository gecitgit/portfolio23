import React, { useState } from 'react';
import '../../src/ContactForm.css';

function ContactForm() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            setStatus("SUCCESS");
            form.reset();
        } else {
            setStatus("ERROR");
        }
    };

    return (
        <div className="contact-container">
            <form 
                onSubmit={handleSubmit}
                action="https://formspree.io/f/mleypooa"
                method="POST"
            >
                <label htmlFor='visitor-name'>Name:</label>
                <input type="text" id="visitor-name" required />

                <label htmlFor='visitor-email'>Email:</label>
                <input type="email" id="visitor-email" required />

                <label htmlFor='visitor-message'>Message:</label>
                <textarea id="visitor-message" required></textarea>

                <button type="submit">Send</button>
            </form>
            
            {status === "SUCCESS" && <p>Thanks! Your message has been sent.</p>}
            {status === "ERROR" && <p>Ooops! There was an error. Try again.</p>}
        </div>
    );
}

export default ContactForm;