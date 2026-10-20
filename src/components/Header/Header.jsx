import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import saxony_logo from "../../assets/logo512.png";
import "./Header.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className="container-fluid gx-0 site-header">
      {/* Top Header */}
      <div className="topHeader container">
        <Link to="/" className="logo-wrapper" onClick={closeMobileMenu}>
          <img
            src={saxony_logo}
            height="85"
            width="85"
            className="img-fluid logo"
            alt="Uganda - Saxony Partnership Logo"
          />
          <div className="logo-text-group">
            <h6 className="logo-title">
              Uganda - Saxony<br />Partnership
            </h6>
          </div>
        </Link>

        <div className="header-actions">
          <NavLink className="topbarButtonLink d-none d-lg-block" to="/join_partnership">
            <button className="topbarButton">EXPRESS INTEREST</button>
          </NavLink>

          <button
            type="button"
            className="mobile-toggle-btn d-lg-none"
            onClick={toggleMobileMenu}
            aria-label={isMobileOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <Navbar isMobileOpen={isMobileOpen} closeMobileMenu={closeMobileMenu} />
    </header>
  );
};

export default Header;
