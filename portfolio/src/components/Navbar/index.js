import React from "react";
import {
  Nav,
  NavbarContainer,
  NavItem,
  NavMenu,
  NavLinks,
} from "../Navbar/NavbarElements";
import "./Navbar.css";
import Github from "../../images/icons/github.svg";
import Linkedin from "../../images/icons/linkedinround.svg";

const Navbar = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavbarContainer>
          {/*<NavLogo to='/'>Isakss</NavLogo>*/}
          <NavMenu className="navmenu">
            <NavItem>
              <NavLinks to="AboutPage" smooth>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="ProjectsPage" smooth>
                Projects
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="Contact" smooth>
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <div className="socials">
            <a href="https://github.com/IsakLarsson">
              <div className="socialLink">
                <img src={Github} alt="Github" />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/isak-%C3%A5man-larsson-629330181/">
              <div className="socialLink">
                <img src={Linkedin} alt="LinkedIn" />
              </div>
            </a>
          </div>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
