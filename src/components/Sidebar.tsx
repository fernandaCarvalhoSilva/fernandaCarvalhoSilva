import React, { useState } from "react";
import {
  PortfolioSidebar,
  Avatar,
  NavButton,
  SidebarContainer,
  SelectContainer,
} from "./Sidebar.style";
import avatar from "../avatar.png";
import { ReactComponent as HamburgerMenu } from "../assets/hamburgerMenu.svg";
import Navbar from "./Navbar";
import { useMediaQuery } from "react-responsive";
import { FaGlobe, FaAngleDown } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

function Sidebar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const { setLanguage } = useLanguage();

  const hasToShowNavbar = () => {
    if (!isMobile) {
      return true;
    }
    if (isMobile && showNavbar) {
      return true;
    }
    return false;
  };

  const handleNavLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    setShowNavbar(!showNavbar);
    event.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const toggleLanguage = (value: string) => {
    setLanguage(value);
  };

  return (
    <PortfolioSidebar>
      <Avatar src={avatar} alt="" />
      <SidebarContainer>
        <span>Fernanda Carvalho</span>
        <NavButton onClick={() => setShowNavbar(!showNavbar)}>
          <HamburgerMenu />
        </NavButton>
      </SidebarContainer>
      <Navbar showAlways={hasToShowNavbar()} handleNavLink={handleNavLink} />
      <SelectContainer>
        <FaGlobe id="globe" />
        <select onChange={(e) => toggleLanguage(e.target.value)}>
          <option value="en">english</option>
          <option value="pt">portuguese</option>
        </select>
        <FaAngleDown id="arrow-down" />
      </SelectContainer>
    </PortfolioSidebar>
  );
}

export default Sidebar;
