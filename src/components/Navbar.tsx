import { NavbarContainer, NavLink, NavItem } from "./Sidebar.style";
import { navlinks, links } from "../constants/sidebar.consts";
import { useLanguage } from "../contexts/LanguageContext";

interface NavbarProps {
  handleNavLink: any;
  showAlways: boolean;
}

function Navbar({ handleNavLink, showAlways }: NavbarProps) {
  const { language } = useLanguage();

  return (
    <NavbarContainer style={{ display: showAlways ? "block" : "none" }}>
      {navlinks[language].map((item, key) => (
        <NavItem>
          <NavLink href={links[key]} onClick={(e) => handleNavLink(e, links[key])}>
            {item}
          </NavLink>
        </NavItem>
      ))}
    </NavbarContainer>
  );
}

export default Navbar;
