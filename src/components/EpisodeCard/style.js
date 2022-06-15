import styled from "styled-components";

export const EpisodeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  margin-bottom: 0.8rem;
`;

export const EpisodeInfo = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 0.875rem;
  padding: 0.1rem 0;
  margin: 0;
`;

export const BaseCard = styled.div`
  background-color: ${(props) => props.theme.palette.background.paper};
  padding: 0.5rem;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const CardTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  padding: 0.5rem 1rem;
  margin-bottom: 0.8rem;
`;
