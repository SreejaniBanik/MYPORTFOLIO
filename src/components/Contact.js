import React from "react";
import './Contact.css';

const Contact = () => (
  <section className="contact-section">
    <h2>Contact Me</h2>
    <p>
      I'm excited to connect! Whether you want to discuss potential opportunities,
      collaborations, or just say hi, feel free to reach out. I’m ready for new
      challenges and eager to contribute.
    </p>
    <p>
      Email: <a href="mailto:sreejanibanik@gmail.com" className="contact-link">sreejanibanik@gmail.com</a>
    </p>
    <p>
      Phone: <a href="tel:+919874714009" className="contact-link">+91 98747 14009</a>
    </p>
    <p>
      LinkedIn: <a href="https://www.linkedin.com/in/sreejani-banik-4a2bab281" target="_blank" rel="noopener noreferrer" className="contact-link">
        linkedin.com/in/sreejani-banik-4a2bab281
      </a>
    </p>
  </section>
);

export default Contact;
