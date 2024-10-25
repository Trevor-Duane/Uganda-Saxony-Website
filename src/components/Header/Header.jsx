import Navbar from "./Navbar";
import saxony_logo from "../../assets/logo512.png";
import './Header.css'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-fluid gx-0">
      {/* first top header */}
      <div className="topHeader container">
        <Link to="/" className="logo-wrapper">
          <img
            src={saxony_logo}
            height="100"
            width="100"
            className="img-fluid logo"
            alt="saxony-uganda partnership logo"
          />
          <h6>
            Uganda - Saxony<br></br>Partnership
          </h6>
        </Link>
        
        <NavLink className="topbarButtonLink" to="join_partnership">
          <button className="topbarButton d-none d-sm-block">EXPRESS INTEREST</button>
        </NavLink>
      </div>

      {/* second navigation bar */}
      <Navbar />
    </header>
  );
};

export default Header;
