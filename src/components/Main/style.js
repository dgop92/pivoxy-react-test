import styled from "styled-components";

export const BaseMain = styled.div`
  margin: 1rem;
  flex-grow: 1;
  overflow-y: auto;
  padding: 0 0.6rem;
`;

export const LoadingMessage = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  color: ${(props) => props.theme.palette.common.white}; ;
`;
