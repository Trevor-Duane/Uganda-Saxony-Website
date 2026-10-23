import MenuItems from './MenuItems';

const Dropdown = ({ submenus, dropdown, depthLevel, closeMobileMenu }) => {
  const nextDepth = depthLevel + 1;
  const dropdownClass = nextDepth > 1 ? 'dropdown-submenu' : '';
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`} role="menu">
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu}
          key={index}
          depthLevel={nextDepth}
          closeMobileMenu={closeMobileMenu}
        />
      ))}
    </ul>
  );
};

export default Dropdown;