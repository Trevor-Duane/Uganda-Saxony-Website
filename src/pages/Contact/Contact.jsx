import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import "animate.css";
import { IoMdPin, IoMdText } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { FaPhone } from "react-icons/fa";
import CustomSlider from "../../components/Slider/CustomSlider";
import CoordinatorCard from "../../components/CoordinatorCard/CoordinatorCard";

const Contact = () => {
  const form = useRef();

  const [coordinators, setCoordinators] = React.useState([]);

  React.useEffect(() => {
    const fetchCoordinators = async () => {
      try {
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/coordinators"
        );
        console.log("schools", response.data)
        setCoordinators(response.data);
      } catch (err) {
        console.log(err.message)
      }
    };
    fetchCoordinators();
  }, []);

  
  const sendEmail = async (e) => {
    e.preventDefault();
  
    // Create a JSON object from the form data
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());
  
    try {
      const response = await axios.post("https://45.9.191.61:3001/send-email", data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log("Response", response);
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
      form.current.reset();
    } catch (error) {
      console.error(error);
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
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_cnjpdki",
  //       "template_x43yh2k",
  //       form.current,
  //       "hw2mTl-uw6fl5Lfjf"
  //     )
  //     .then(
  //       (result) => {
  //         Swal.fire({
  //           title: "Message Sent Successfully",
  //           showClass: {
  //             popup: `
  //             animate__animated
  //             animate__fadeInUp
  //             animate__faster
  //           `,
  //           },
  //           hideClass: {
  //             popup: `
  //             animate__animated
  //             animate__fadeOutDown
  //             animate__faster
  //           `,
  //           },
  //         });
  //       },
  //       (error) => {
  //         Swal.fire({
  //           title: "Sorry, try again",
  //           showClass: {
  //             popup: `
  //             animate__animated
  //             animate__fadeInUp
  //             animate__faster
  //           `,
  //           },
  //           hideClass: {
  //             popup: `
  //             animate__animated
  //             animate__fadeOutDown
  //             animate__faster
  //           `,
  //           },
  //         });
  //       }
  //     );
  // };
  return (
    <>
      {/* <CustomSlider /> */}
      <section className="container-fluid coordinators-wrapper">
        <div className="coordinators-title container gx-0">
          <p>Meet the Coordinating team, Uganda</p>
        </div>
        <div className="coordinators container gx-0">
          {coordinators.map((coordinator, index) =>(
            <CoordinatorCard key={coordinator.id} coordinator={coordinator}/>
          ))}
        </div>
      </section>

      <section className="contactHero container-fluid">
        <div className="contactWrapper container">
          <div className="contactSectionTitle">
            <h6 className="sectionHeader">Get in touch</h6>
          </div>
          <div className="contactDetails row">
            <div className="contactDetailsCol col">
              <div className="detailsCol">
                <div>
                  <FaPhone size={22} color="#1E8E2C" />
                </div>
                <div>
                  <h6 className="sectionSubHeader">Contact</h6>
                </div>
                <div className="contactParaTextWrapper">
                  <ul>
                    <li>+256 772 748 774</li>
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
                  <h6 className="sectionSubHeader">Postal Address</h6>
                  <p className="contactParaText">
                    P.O.Box 33929 <br></br>Kampala, Uganda
                  </p>
                </div>

                <div>
                  <h6 className="sectionSubHeader">Coordination Office</h6>
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
                  <h6 className="sectionSubHeader">Email</h6>
                </div>
                <div className="contactParaTextWrapper">
                  <ul>
                    <li>info@uganda-saxonypartnership.org</li>
                    <li>ugandasaxony@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="chevWrapper d-none d-sm-block">
            <FaAngleDown size={22} color="#433F3F" />
          </div>
        </div>
      </section>

      <section className="formSection container-fluid">
        <div className="container contactForm">
          <form ref={form} onSubmit={sendEmail} className="userContactForm">
            <h6 className="sectionHeader">Write to us</h6>
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
                  required
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

            <button className="formButton" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="google-map"></section>
    </>
  );
};

export default Contact;
