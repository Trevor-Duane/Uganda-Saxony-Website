import React from "react";
import saxony_logo from "../../assets/logo512.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { menuItemsData } from "./MenuItemsData";

function Header() {
  const [isActive, setIsActive] = React.useState(1);
  return (
    <header className="container-fluid">
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

        <Link className="topbarButton d-none d-sm-block" to="express_interest">
          Express Interest
        </Link>
      </div>

      {/* Desktop navigation menu below top header */}
      <nav className="container-fluid px-0 navbarWrapper d-none d-sm-none d-md-block">
        <div className="container navBar">
          {menuItemsData.map((item) => (
            <NavLink to={item.url} key={item.id} onClick={() => setIsActive(item.id)} className={({ isActive}) => (isActive  ? 'active menu' : 'inactive menu')}>
              <span className="menu-item">{item.title}</span>
            </NavLink>
          ))}
        </div>
      </nav>


      {/* Mobile navigation menu below top header */}
      <nav className="container-fluid px-0 mobileNavbarWrapper d-block d-sm-none">
        <div className="container mobileNavBar">
          {menuItemsData.map((item) => (
            <NavLink to={item.url} key={item.id} onClick={() => setIsActive(item.id)} className={({ isActive}) => (isActive  ? 'active mobile-menu' : 'inactive mobile-menu')}>
              <span className="menu-item">{item.title}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
