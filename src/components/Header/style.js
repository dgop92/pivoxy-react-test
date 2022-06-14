import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

export const BaseHeader = styled.div`
  box-shadow: 0px 0px 17px -4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 2rem;

  @media ${devices.down.desktop} {
    margin-top: 0rem;
  }
  /* border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px; */
  background-color: ${(props) => props.theme.palette.primary.main};
`;

export const Title = styled.h1`
  font-size: 2rem;
  padding: 1.5rem;
  margin: 0;
  font-family: "Comfortaa", cursive;
  font-weight: bold;
  color: ${(props) => props.theme.palette.common.white};

  @media ${devices.down.laptopL} {
    font-size: 1.5rem;
  }
`;
