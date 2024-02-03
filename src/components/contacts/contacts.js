import React from "react";
import { useRef } from "react";
import "./contacts.css";
import linkedin from "../../assests/LinkedIn.png";
import githhub from "../../assests/gith.png";
import mail from "../../assests/mail.png";
import emailjs from "@emailjs/browser";

function Contacts() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_shleidr",
        "template_5v7205m",
        form.current,
        "jrlOtkIpOQE8tYfGU"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="contactpagetitle" id="ctitle">
        Contact me
      </h1>
      <span className="contactdesc">
        please feel free to reach me if any job oppurtunity available
      </span>
      <form className="contactform" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="cname"
          placeholder="your name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your email"
          name="from_email"
        />
        <textarea
          className="message"
          name="messages"
          rows="5"
          placeholder="Your message"
        ></textarea>
        <button type="submit" className="submitbtn" value="send">
          submit
        </button>
        <div className="links">
          <img src={linkedin} alt="linkedin" className="link" />
          <img src={githhub} alt="gith" className="link" />
          <img src={mail} alt="email" className="link" />
        </div>
      </form>
    </div>
  );
}

export default Contacts;
