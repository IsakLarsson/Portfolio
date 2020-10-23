import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  font-size: 2.1rem;
  align-self: center;
  color: #00c896;
  max-width: 400px;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;

export const Arrow = styled.button`
  position: relative;
  margin-top: 10px;
  max-width: 400px;
  border: none;
  color: transparent;
  background: transparent;
  transition: all 0.2s ease-in-out;
  outline: none;
  //&:hover {
  //transition: all 0.3s ease-in-out;
  //margin-top: ${(props) => (props.onMouseEnter ? "70px" : "50px")};
  //}
`;
