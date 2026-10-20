import { useState, useEffect, useRef } from "react";
import "./Contact.css";
import "animate.css";
import { IoMdPin, IoMdText } from "react-icons/io";
import Swal from "sweetalert2";
import axios from "axios";
import { FaPhone } from "react-icons/fa";
import CoordinatorCard from "../../components/CoordinatorCard/CoordinatorCard";

const Contact = () => {
  const form = useRef();
  const [coordinators, setCoordinators] = useState([]);
  const [loadingCoordinators, setLoadingCoordinators] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchCoordinators = async () => {
      try {
        const response = await axios.get(
          "https://uganda-saxonypartnership.org/cms/wp-json/acf/v3/coordinators"
        );
        if (isMounted && response.data) {
          setCoordinators(response.data);
        }
      } catch (err) {
        console.warn("Could not fetch coordinators", err);
      } finally {
        if (isMounted) setLoadingCoordinators(false);
      }
    };
    fetchCoordinators();
    return () => {
      isMounted = false;
    };
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      await axios.post("https://45.9.191.61:3001/send-email", data, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 8000,
      });

      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully",
        text: "Thank you for reaching out to the Uganda-Saxony Partnership. We will respond shortly.",
        confirmButtonColor: "#1e8e2c",
      });
      form.current.reset();
    } catch (error) {
      console.warn("Direct form submission error", error);
      Swal.fire({
        icon: "info",
        title: "Message Could Not Be Sent Automatically",
        html: `Please reach us directly at <br/><strong><a href="mailto:info@uganda-saxonypartnership.org">info@uganda-saxonypartnership.org</a></strong><br/>or call <strong>+256 772 748 774</strong>.`,
        confirmButtonColor: "#1e8e2c",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Coordinators Section */}
      <section className="container-fluid coordinators-wrapper">
        <div className="coordinators-title container gx-0">
          <h2>Meet the Coordinating Team, Uganda</h2>
        </div>
        <div className="coordinators container gx-0">
          {loadingCoordinators ? (
            <div className="py-4 text-center w-100">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading coordinators...</span>
              </div>
            </div>
          ) : coordinators.length > 0 ? (
            coordinators.map((coordinator) => (
              <CoordinatorCard key={coordinator.id} coordinator={coordinator} />
            ))
          ) : (
            <p className="text-muted text-center w-100 py-3">
              Coordinating team details available upon request at info@uganda-saxonypartnership.org
            </p>
          )}
        </div>
      </section>

      {/* Contact Details Hero */}
      <section className="contactHero container-fluid">
        <div className="contactWrapper container">
          <div className="contactSectionTitle">
            <h2 className="sectionHeader">Get in Touch</h2>
          </div>
          <div className="contactDetails row g-4">
            <div className="contactDetailsCol col-md-4 col-sm-12">
              <div className="detailsCol">
                <div>
                  <FaPhone size={24} color="#1E8E2C" />
                </div>
                <div>
                  <h3 className="sectionSubHeader">Phone</h3>
                </div>
                <div className="contactParaTextWrapper">
                  <ul>
                    <li><a href="tel:+256772748774">+256 772 748 774</a></li>
                    <li><a href="tel:+256704090711">+256 704 090 711</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="contactDetailsCol col-md-4 col-sm-12">
              <div className="detailsCol">
                <div>
                  <IoMdPin size={24} color="#1E8E2C" />
                </div>
                <div>
                  <h3 className="sectionSubHeader">Coordination Office</h3>
                  <p className="contactParaText">
                    Plot 902 - Off Kalema Rd, Makamba Zone, Lungujja - Kikandwa, Rubaga
                  </p>
                  <p className="contactParaText text-muted small">
                    P.O. Box 33929 Kampala, Uganda
                  </p>
                </div>
              </div>
            </div>

            <div className="contactDetailsCol col-md-4 col-sm-12">
              <div className="detailsCol">
                <div>
                  <IoMdText size={24} color="#1E8E2C" />
                </div>
                <div>
                  <h3 className="sectionSubHeader">Email Inquiries</h3>
                </div>
                <div className="contactParaTextWrapper">
                  <ul>
                    <li><a href="mailto:info@uganda-saxonypartnership.org">info@uganda-saxonypartnership.org</a></li>
                    <li><a href="mailto:ugandasaxony@gmail.com">ugandasaxony@gmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="formSection container-fluid">
        <div className="container contactForm">
          <form ref={form} onSubmit={sendEmail} className="userContactForm">
            <h2 className="sectionHeader">Write to Us</h2>
            <p className="text-muted mb-4">
              Have questions about building a partnership, school exchanges, or funding? Send us a message below.
            </p>

            <div className="row mb-3">
              <div className="col-md-4 col-sm-12 mt-2">
                <label htmlFor="from_name" className="form-label small fw-bold">Full Name *</label>
                <input
                  id="from_name"
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="from_name"
                  required
                />
              </div>
              <div className="col-md-4 col-sm-12 mt-2">
                <label htmlFor="from_email" className="form-label small fw-bold">Email Address *</label>
                <input
                  id="from_email"
                  type="email"
                  className="form-control"
                  placeholder="your.email@example.com"
                  name="from_email"
                  required
                />
              </div>

              <div className="col-md-4 col-sm-12 mt-2">
                <label htmlFor="from_mobile" className="form-label small fw-bold">Phone Number *</label>
                <input
                  id="from_mobile"
                  type="tel"
                  className="form-control"
                  placeholder="+256..."
                  name="from_mobile"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6 col-sm-12 mt-2">
                <label htmlFor="from_address" className="form-label small fw-bold">Location or District</label>
                <input
                  id="from_address"
                  type="text"
                  className="form-control"
                  placeholder="e.g. Mukono, Kampala, Dresden, Leipzig"
                  name="from_address"
                />
              </div>
              <div className="col-md-6 col-sm-12 mt-2">
                <label htmlFor="from_organisation" className="form-label small fw-bold">Organisation / School Name</label>
                <input
                  id="from_organisation"
                  type="text"
                  className="form-control"
                  placeholder="Organisation / School"
                  name="from_organisation"
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <label htmlFor="message" className="form-label small fw-bold">Message *</label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Describe your inquiry or interest in partnering..."
                  rows="5"
                  name="message"
                  required
                />
              </div>
            </div>

            <button
              className="formButton"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
