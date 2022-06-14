import styled from "styled-components";
// import { devices } from "../../utils/breakpoints";

export const BaseMain = styled.div`
  margin: 1rem;
  flex-grow: 1;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  gap: 1rem;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.palette.background.paper};
  margin: 0.5rem;
  padding: 0.5rem;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const CardTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  margin: 0;
  padding: 0.5rem 1rem;
  margin-bottom: 0.8rem;
`;

export const EpisodeInfoContainer = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  margin-bottom: 0.8rem;
`;

export const EpisodeInfo = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  padding: 0.1rem 0;
  margin: 0;
`;
