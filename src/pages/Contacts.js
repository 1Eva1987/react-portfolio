import React from "react";
import "../pages/Contacts.css";
import { FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cfh7eub",
        "template_t9jcazh",
        form.current,
        "YSOXrxNZKaJKKFM8q"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contacts">
      <h1>Contact Me</h1>
      <div className="contact-me">
        <div className="contact-links">
          <a href="tel:+447397803602">
            <FaPhone className="phone" />
          </a>
          <a href="https://github.com/1Eva1987">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ieva-baranauskaite-096773252">
            <FaLinkedin />
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <p>Send me a message! </p>
          <p>I'd love to hear from you.</p>
          <input type="text" name="user_name" placeholder="Name?" />
          <input type="email" name="user_email" placeholder="E-mail" />
          <textarea name="message" placeholder="Your message..." />
          <input className="submit" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
export default Contacts;
