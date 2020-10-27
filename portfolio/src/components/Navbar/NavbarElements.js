import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  width: 100%;
  //margin-top: -80px;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  z-index: 10;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  @media screen and (max-width: 1024px) {
    padding: 0px;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  //margin-left:24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  //margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #00c896;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: ease-out 0.2s;

  &:hover {
    transform: scale(1.1);
    font-weight: 600;
  }
`;
