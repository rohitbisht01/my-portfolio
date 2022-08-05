import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hjh1gi2",
      "template_o5j59nb",
      form.current,
      "vnXUlbEHteDJDHY_I"
    );
    // .then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Email Section */}
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>rohitsinghbisht124@gmail.com</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:rohitsinghbisht124@gmail.com"
            >
              Send a message
            </a>
          </article>

          {/* messenger section */}
          <article className="contact__option">
            <FiInstagram className="contact__option__icon" />
            <h4>Instagram</h4>
            <h5>rohit_bisht95</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/rohit_bisht95/"
            >
              Send a message
            </a>
          </article>

          {/* whatsapp section */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>Whatsapp</h4>
            <h5>Rohit Singh Bisht</h5>
            <a
              href="https://api.whatsapp.com/send?phone+947310667014"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
