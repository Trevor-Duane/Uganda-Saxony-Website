import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactStyles.css";
import "animate.css";
import { IoMdPin, IoMdText } from "react-icons/io";
import {
  FaAngleDown,
  FaDivide,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import Swal from "sweetalert2";
import maps from "../assets/google-maps.png";
import { FaPhone } from "react-icons/fa";
import ContactForm from "../components/header/ContactForm";
import TextInput from "../components/header/TextInput";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cnjpdki",
        "template_x43yh2k",
        form.current,
        "hw2mTl-uw6fl5Lfjf"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Message Sent Successfully",
            showClass: {
              popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
            },
            hideClass: {
              popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
            },
          });
        },
        (error) => {
          Swal.fire({
            title: "Sorry, try again",
            showClass: {
              popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
            },
            hideClass: {
              popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
            },
          });
        }
      );
  };
  return (
    <>
      <section className="google-map"></section>

      <section className="contactHero container-fluid">
        <div className="contactWrapper container">
          <div className="contactSectionTitle">
            <h6>Get in touch</h6>
          </div>
          <div className="contactDetails row">
            <div className="contactDetailsCol col">
              <div className="detailsCol">
                <div>
                  <FaPhone size={22} color="#1E8E2C" />
                </div>
                <div>
                  <h6>Contact</h6>
                </div>
                <div className="contactParaTextWrapper">
                  <ul>
                    <li>+256 727 748 774</li>
                    <li>+256 704 090 711</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="contactDetailsCol col">
              <div className="detailsCol">
                <div>
                  <IoMdPin size={22} color="#1E8E2C" />
                </div>
                <div>
                  <h6>Address</h6>
                </div>

                <div>
                  <h6 className="contactSubHeads">Posta Address</h6>
                  <p className="contactParaText">
                    P.O.Box 33929 <br></br>Kampala, Uganda
                  </p>
                </div>
                <div>
                  <h6 className="contactSubHeads">Coordination Office</h6>
                  <p className="contactParaText">
                    Plot 902 - Off Kalema Rd, Makamba Zone - Lungujja -
                    Kikandwa, Rubaga
                  </p>
                </div>
              </div>
            </div>

            <div className="contactDetailsCol col">
              <div className="detailsCol">
                <div>
                  <IoMdText size={22} color="#1E8E2C" />
                </div>
                <div>
                  <h6>Email</h6>
                </div>
                <div className="contactParaTextWrapper">
                  <ul>
                    <li>info@usproject.org</li>
                    <li>usproject@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="chevWrapper">
            <FaAngleDown size={22} color="#433F3F" />
          </div>
        </div>
      </section>

      <section className="formSection container-fluid">
        <div className="container contactForm">

          <form ref={form} onSubmit={sendEmail} className="userContactForm">
            <h6 className="tableSectionsHead">Write to us</h6>
            <div className="row mb-4">
              <div className="col-md-4 col-sm-12 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  name="from_name"
                  required
                />
              </div>
              <div className="col-md-4 col-sm-12 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                  name="from_email"
                  required
                />
              </div>

              <div className="col-md-4 col-sm-12 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="from_mobile"
                  require
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-4 col-sm-12 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location or Address"
                  name="from_address"
                  required
                />
              </div>
              <div className="col-md-4 col-sm-12 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Organisation Name"
                  name="from_organisation"
                  required
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Additional Information and Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Type your message here..."
                  rows="6"
                  name="message"
                  required
                ></textarea>
              </div>
            </div>

            <Button className="formButton" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <section className="container-fluid footerContainer">
        <Footer />
      </section>
    </>
  );
};

export default ContactUs;
