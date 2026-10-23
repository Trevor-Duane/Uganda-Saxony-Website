import { menuItems } from '../../menuItems';
import MenuItems from '../MenuItems';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isMobileOpen, closeMobileMenu }) => {
  return (
    <>
      {isMobileOpen && (
        <div
          className="mobile-backdrop d-lg-none"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
      <nav
        className={`container-fluid navMain ${isMobileOpen ? 'mobile-open' : ''}`}
        aria-label="Main Navigation"
      >
        <ul className="menus container">
          {menuItems.map((menu, index) => {
            return (
              <MenuItems
                items={menu}
                key={menu.id || index}
                depthLevel={0}
                closeMobileMenu={closeMobileMenu}
              />
            );
          })}
          <li className="menu-items d-lg-none mobile-cta-item">
            <NavLink
              to="/join_partnership"
              onClick={closeMobileMenu}
              className="mobile-express-btn"
            >
              EXPRESS INTEREST
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;