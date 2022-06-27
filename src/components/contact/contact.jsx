import "./contact.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.facebook.com/huthoi.ne"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineFacebook className="icon" />
          <h2>
            facebook <span>Nguyen Huu Thoai</span>
          </h2>
        </a>

        <a href="#" className="contact whatsapp" target={"blank"}>
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+123 456 789</span>
          </h2>
        </a>

        <a
          href="https://www.instagram.com/hu.thoine/"
          className="contact instagram"
        >
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>hu.thoine</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
