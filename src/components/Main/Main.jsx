import React from "react";
import {
  BaseMain,
  Card,
  CardContainer,
  CardTitle,
  EpisodeInfo,
  EpisodeInfoContainer,
} from "./style";

function InfoCard() {
  return (
    <Card>
      <CardTitle>Ricktanslinda Day’s</CardTitle>
      <EpisodeInfoContainer>
        <EpisodeInfo>AirDate: April 7, 2014</EpisodeInfo>
        <EpisodeInfo>Season: 2</EpisodeInfo>
        <EpisodeInfo>Episode: 06</EpisodeInfo>
      </EpisodeInfoContainer>
    </Card>
  );
}

export default function Main() {
  return (
    <BaseMain>
      <CardContainer>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </CardContainer>
    </BaseMain>
  );
}
