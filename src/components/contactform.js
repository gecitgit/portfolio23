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
                <label>Name:</label>
                <input type="text" name="name" required />

                <label>Email:</label>
                <input type="email" name="email" required />

                <label>Message:</label>
                <textarea name="message" required></textarea>

                <button type="submit">Send</button>
            </form>
            
            {status === "SUCCESS" && <p>Thanks! Your message has been sent.</p>}
            {status === "ERROR" && <p>Ooops! There was an error. Try again.</p>}
        </div>
    );
}

export default ContactForm;