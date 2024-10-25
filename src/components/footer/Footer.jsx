import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="myFooter">
          <div className="footerCol logoCol">
            <img
              src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/08/logo512.png"
              height="160"
              width="160"
              className="img-fluid img-thumbnail border border-dark"
              alt="saxony-uganda partnership logo"
            />
          </div>

          <div className="footerCol">
            <div className="footerColh6">
              <h6>Uganda-Saxony Partnership</h6>
            </div>
            <div className="footerLinks">
              <Link to="/about_us" className="sectionLink">
                About us
              </Link>
              <Link to="/events" className="sectionLink">
                Events
              </Link>

              <Link to="/gallery" className="sectionLink">
                Gallery
              </Link>

              <Link to="/contact" className="sectionLink">
                Contact us
              </Link>
              <Link to="/join_partnership" className="sectionLink">
                Join Partnership
              </Link>
              <Link to="/funding_opportunities" className="sectionLink">
                Funding Opportunities
              </Link>
            </div>
          </div>

          <div className="footerCol">
            <div className="footerColh6">
              <h6>Useful Links</h6>
            </div>
            <div className="footerLinks">
              <Link
                to="https://cms.uganda-saxonypartnership.org/wp-admin"
                target="_blank"
                rel="noreferrer"
              >
                Staff
              </Link>
              {/* <Link to="/privacy-policy">Privacy Policy</Link> */}
              <Link to="/cookie-policy">Cookie Policy</Link>
              {/* <Link to="/terms&Conditions">Terms & Conditions</Link> */}
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms & Conditions</Link>
            </div>
          </div>

          <div className="footerCol">
            <div className="footerColh6">
              <h6>Social Media</h6>
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
                      size={24}
                      color="#212020"
                    />
                  </a>

                  <a
                    href="https://twitter.com/uganda_saxony"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter
                      className="socialIcons"
                      size={24}
                      color="#212020"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/uganda_saxony_partnership/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram
                      className="socialIcons"
                      size={24}
                      color="#212020"
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
                      size={24}
                      color="#212020"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/ugandasachsenpartnerschaft/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram
                      className="socialIcons"
                      size={24}
                      color="#212020"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="saxony-logo container">
        <img
          src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/Free-State-of-Saxony-Logo.jpeg"
          // src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/08/financed-from-saxony-425x756-1-e1723030012459.png"
          className="img-fluid img-thumbnail border border-dark"
          height={380}
          width={500}
          alt=""
        />
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
