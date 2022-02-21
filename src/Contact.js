import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Swal from "sweetalert2";

export const Contact = () => {
  const form = useRef();
  const Swal = require("sweetalert2");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wrnqiyb",
        "template_p4o0u2d",
        form.current,
        "user_AXOMXKL49FlDfUfC8ioKq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact__container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label>

        <input type="text" name="user_name" />
        <br></br>
        <label>Email:</label>
        <input type="email" name="user_email" />
        <br></br>

        <label>Message:</label>
        <textarea name="message" />
        <br></br>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
export default Contact;
