import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
import localLogo from "../../assets/logo512.png";
import saxonyLogoLocal from "../../assets/Free State Of Saxony.png";

const Footer = () => {
  return (
    <footer className="container-fluid site-footer">
      <div className="container">
        <div className="myFooter">
          <div className="footerCol logoCol">
            <Link to="/">
              <img
                src={localLogo}
                height="130"
                width="130"
                className="img-fluid footer-brand-logo"
                alt="Uganda-Saxony Partnership logo"
              />
            </Link>
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
                Events & News
              </Link>
              <Link to="/gallery" className="sectionLink">
                Photo Gallery
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
              <a
                href="https://cms.uganda-saxonypartnership.org/wp-admin"
                target="_blank"
                rel="noreferrer"
                className="sectionLink"
              >
                Staff Portal
              </a>
              <Link to="/cookie_policy" className="sectionLink">
                Cookie Policy
              </Link>
              <Link to="/privacy_policy" className="sectionLink">
                Privacy Policy
              </Link>
              <Link to="/terms_and_conditions" className="sectionLink">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="footerCol">
            <div className="footerColh6">
              <h6>Social Media</h6>
            </div>
            <div className="footerLinks">
              <div className="socialIconsWrapper">
                <span className="socialHeader">Saxony Uganda</span>
                <div className="social-links-row">
                  <a
                    href="https://www.facebook.com/profile.php?id=100094606894335"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook page for Saxony Uganda"
                  >
                    <FaFacebook className="socialIcons" size={22} color="#1e8e2c" />
                  </a>

                  <a
                    href="https://twitter.com/uganda_saxony"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter handle for Saxony Uganda"
                  >
                    <FaTwitter className="socialIcons" size={22} color="#1e8e2c" />
                  </a>

                  <a
                    href="https://www.instagram.com/uganda_saxony_partnership/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram page for Saxony Uganda"
                  >
                    <FaInstagram className="socialIcons" size={22} color="#1e8e2c" />
                  </a>
                </div>
              </div>

              <div className="socialIconsWrapper mt-3">
                <span className="socialHeader">Saxony Germany</span>
                <div className="social-links-row">
                  <a
                    href="https://www.facebook.com/profile.php?id=100094409740783"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook page for Saxony Germany"
                  >
                    <FaFacebook className="socialIcons" size={22} color="#1e8e2c" />
                  </a>

                  <a
                    href="https://www.instagram.com/ugandasachsenpartnerschaft/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram page for Saxony Germany"
                  >
                    <FaInstagram className="socialIcons" size={22} color="#1e8e2c" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="saxony-logo container text-center my-4">
        <img
          src="https://uganda-saxonypartnership.org/cms/wp-content/uploads/2024/07/Free-State-of-Saxony-Logo.jpeg"
          className="img-fluid sponsor-logo"
          alt="Financed by the Free State of Saxony"
          onError={(e) => {
            e.currentTarget.src = saxonyLogoLocal;
          }}
        />
      </div>

      <hr className="footer-divider" />

      <div className="copyRightSection text-center py-3">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Uganda-Saxony Partnership. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
