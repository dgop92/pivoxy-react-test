import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

export const BaseSidebar = styled.div`
  background-color: ${(props) => props.theme.palette.background.paper};
  margin: 1rem;
  box-shadow: 0px 5px 15px rgba(47, 208, 203, 0.2);
  border-radius: 35px;
`;

export const SidebarContent = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;

  @media ${devices.down.desktop} {
    width: auto;
  }
`;
