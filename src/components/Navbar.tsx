import { NavbarContainer, NavLink, NavItem } from "./Sidebar.style";
import { navlinks, links } from "../constants/sidebar.consts";
import { useLanguage } from "../contexts/LanguageContext";

interface NavbarProps {
  handleNavLink: React.MouseEventHandler<HTMLAnchorElement>;
  showAlways: boolean;
}

function Navbar({ handleNavLink, showAlways }: NavbarProps) {
  const { language } = useLanguage();

  return (
    <NavbarContainer style={{ display: showAlways ? "block" : "none" }}>
      {navlinks[language].map((item, key) => (
        <NavItem>
          <NavLink href={links[key]} onClick={handleNavLink}>
            {item}
          </NavLink>
        </NavItem>
      ))}
    </NavbarContainer>
  );
}

export default Navbar;
