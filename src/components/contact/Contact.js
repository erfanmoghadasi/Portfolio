import React from "react";
import "./contact.css";

//icons
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { TiSocialSkypeOutline } from "react-icons/ti";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className=".contact__option-icon" />
            <h4>Email</h4>
            <h5>erfan.moqadasii@gmail.com</h5>
            <a
              href="emailto:erfan.moqadasii@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className=".contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+98 918 603 2838</h5>
            <a
              href="https://wa.me/+989186032838"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <TiSocialSkypeOutline className=".contact__option-icon" />
            <h4>Skype</h4>
            <h5>live:.cid.18de3dd3816b5e9a</h5>
            <a
              href="skype:live:.cid.18de3dd3816b5e9a?chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
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
