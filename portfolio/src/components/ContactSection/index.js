import React from "react";
import "../ContactSection/Contact.css";
const Contact = () => {
  return (
    <section className="contactSection">
      <div data-aos="fade-up" className="contactHeader">
        <h1>Now that you've gotten to know me</h1>
        <div className="contactP">
          <p>
            If you have a project to work on, or simply a question about me or
            my work. Don’t hesitate to get in touch, I’d love to hear from you!
          </p>
        </div>
      </div>

      <div className="contactForm"></div>
    </section>
  );
};

export default Contact;
