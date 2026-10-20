import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import { NavLink } from 'react-router-dom';

const MenuItems = ({ items, depthLevel = 0, closeMobileMenu }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    if (window.innerWidth >= 992) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 992) {
      setDropdown(false);
    }
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  const handleLinkClick = () => {
    setDropdown(false);
    if (closeMobileMenu) {
      closeMobileMenu();
    }
  };

  return (
    <li
      className={`menu-items ${dropdown ? 'open' : ''}`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            className="menu-button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={toggleDropdown}
          >
            <span>{items.title}</span>
            <span className={`arrow ${dropdown ? 'arrow-up' : ''}`} />
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            closeMobileMenu={closeMobileMenu}
          />
        </>
      ) : (
        <NavLink
          to={items.url}
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={handleLinkClick}
        >
          {items.title}
        </NavLink>
      )}
    </li>
  );
};

export default MenuItems;