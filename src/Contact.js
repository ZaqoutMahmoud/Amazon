import emailjs from "emailjs-com";
import React from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

// $ npm install --save sweetalert2

export default function ContactUs() {
  //npm i emailjs-com --save

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wrnqiyb",
        "template_p4o0u2d",
        e.target,
        "user_AXOMXKL49FlDfUfC8ioKq"
      )
      .then(
        (result) => {
          console.log("result" + result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your mail has arrived.",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div
      className="container pt-5"
      data-aos="fade-down"
      data-aos-duration="1200"
    >
      <h1>
        <br />
      </h1>
      <form onSubmit={sendEmail}>
        <div className="row pt-3 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto text-center">
            <input
              type="submit"
              className="btn btn-info btn-danger"
              value="Send Message"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
