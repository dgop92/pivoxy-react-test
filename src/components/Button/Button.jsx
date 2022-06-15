import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  color: ${(props) => props.theme.palette.common.white};

  border-color: transparent;
  outline: none;
  border-radius: 0.4rem;

  width: 90%;

  background: ${(props) => props.theme.palette.primary.main};
  cursor: pointer;

  @media ${devices.down.desktop} {
    width: 95%;
    margin-bottom: 0.5rem;
  }
`;

export default Button;
