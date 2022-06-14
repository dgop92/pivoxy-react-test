import styled from "styled-components";
// import { devices } from "../../utils/breakpoints";

export const BaseSidebar = styled.div`
  background-color: ${(props) => props.theme.palette.background.paper};
  width: 350px;
  margin: 1rem;
  box-shadow: 0px 5px 15px rgba(47, 208, 203, 0.2);
  border-radius: 35px;
`;
