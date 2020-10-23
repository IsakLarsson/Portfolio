import React from "react";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  NavItem,
  NavMenu,
  NavLinks,
} from "../Navbar/NavbarElements";

const Navbar = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavbarContainer>
          {/*<NavLogo to='/'>Isakss</NavLogo>*/}
          <NavMenu className="navmenu">
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="future">Future endeavors</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
