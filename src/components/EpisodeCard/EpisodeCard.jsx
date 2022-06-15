import React from "react";
import { BaseCard, CardTitle, EpisodeInfo, EpisodeInfoContainer } from "./style";

export default function EpisodeCard({ name, airDate, episodeSeason }) {
  const season = episodeSeason.slice(1, 3);
  const episode = episodeSeason.slice(4);
  return (
    <BaseCard>
      <CardTitle>{name}</CardTitle>
      <EpisodeInfoContainer>
        <EpisodeInfo>Air Date: {airDate}</EpisodeInfo>
        <EpisodeInfo>Season: {season}</EpisodeInfo>
        <EpisodeInfo>Episode: {episode}</EpisodeInfo>
      </EpisodeInfoContainer>
    </BaseCard>
  );
}
