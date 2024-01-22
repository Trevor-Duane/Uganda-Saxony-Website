import React from "react";
import logo from "../assets/logo512.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="myFooter">
          <div className="footerCol">
            <img
              src={logo}
              height="140"
              width="140"
              alt="saxony-uganda partnership logo"
            />
          </div>

          <div className="footerCol">
            <div>
              <h6>Uganda-Saxony</h6>
            </div>
            <div className="footerLinks">
              <Link to="/our_work" className="sectionLink">About us</Link>
              <Link to="/events" className="sectionLink">Events</Link>
              <Link to="/resources" className="sectionLink">Resources</Link>
              <Link to="/contact_us" className="sectionLink">Contact us</Link>
              <Link to="/join_project" className="sectionLink">Join Partnership</Link>
            </div>
          </div>

          <div className="footerCol">
            <div>
              <h6>Useful Links</h6>
            </div>
            <div className="footerLinks">
              <a href='https://cms.uganda-saxonypartnership.org/wp-admin' target='_blank' rel='noreferrer'>Staff</a>
              <a href="1">Privacy</a>
              <a href="1">Cookie Policy</a>
              <a href="1">Terms & Conditions</a>
            </div>
          </div>

          <div className="footerCol">
            <div>
              <h6>Find us on social media</h6>
            </div>
            <div className="footerLinks">
              <div className="socialIconsWrapper">
                <span className="socialHeader">Saxony Uganda</span>
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=100094606894335"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook
                      className="socialIcons"
                      size={14}
                      color="#b7b5b1"
                    />
                  </a>

                  <a
                    href="https://twitter.com/uganda_saxony"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter
                      className="socialIcons"
                      size={14}
                      color="#b7b5b1"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/uganda_saxony_partnership/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram
                      className="socialIcons"
                      size={14}
                      color="#b7b5b1"
                    />
                  </a>
                </div>
              </div>

              <div className="socialIconsWrapper">
                <span className="socialHeader">Saxony Germany</span>
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=100094409740783"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook
                      className="socialIcons"
                      size={14}
                      color="#b7b5b1"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/ugandasachsenpartnerschaft/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram
                      className="socialIcons"
                      size={14}
                      color="#b7b5b1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="copyRightSection">
        <h6>
          &copy; Uganda-Saxony Partnership | Built and powered by Tenda Africa
        </h6>
      </div>
    </div>
  );
};

export default Footer;
