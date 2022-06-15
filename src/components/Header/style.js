import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

export const BaseHeader = styled.div`
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 35px;
  margin: 0 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media ${devices.down.desktop} {
    margin: 0;
    border-radius: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  background-color: ${(props) => props.theme.palette.primary.main};
`;

export const Title = styled.h1`
  font-size: 2rem;
  padding: 2rem 2.25rem;
  margin: 0;
  font-family: "Comfortaa", cursive;
  color: ${(props) => props.theme.palette.common.white};

  @media ${devices.down.laptopL} {
    font-size: 1.5rem;
    padding: 1.5rem;
  }
`;
