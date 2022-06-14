import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getEpisodes } from "rickmortyapi";
import {
  BaseMain,
  Card,
  CardTitle,
  EpisodeInfo,
  EpisodeInfoContainer,
  LoadingMessage,
} from "./style";

function InfoCard({ name, airDate, episodeSeason }) {
  const season = episodeSeason.slice(1, 3);
  const episode = episodeSeason.slice(5);
  return (
    <Card>
      <CardTitle>{name}</CardTitle>
      <EpisodeInfoContainer>
        <EpisodeInfo>{airDate}</EpisodeInfo>
        <EpisodeInfo>{season}</EpisodeInfo>
        <EpisodeInfo>{episode}</EpisodeInfo>
      </EpisodeInfoContainer>
    </Card>
  );
}

const infinityStyles = {
  gap: "1rem",
  gridTemplateColumns: "repeat(auto-fill, minmax(325px, 1fr))",
  display: "grid",
};

export default function Main() {
  const [state, setState] = useState({
    currentPage: 1,
    episodes: [],
    hasMore: true,
  });

  const fetchMoreData = async () => {
    const responseData = await getEpisodes({ page: state.currentPage });
    const episodes = responseData.data.results;
    const nextUrl = responseData.data.info.next;

    setState((oldState) => ({
      currentPage: oldState.currentPage + 1,
      episodes: [...oldState.episodes, ...episodes],
      hasMore: nextUrl !== null,
    }));
  };

  useEffect(() => {
    fetchMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(state.hasMore);

  return (
    <BaseMain id="mainBase">
      <InfiniteScroll
        dataLength={state.episodes.length}
        next={fetchMoreData}
        hasMore={state.hasMore}
        loader={<LoadingMessage>Loading...</LoadingMessage>}
        style={infinityStyles}
        scrollableTarget="mainBase"
      >
        {state.episodes.map((data) => (
          <InfoCard
            key={data.id}
            name={data.name}
            airDate={data.air_date}
            episodeSeason={data.episode}
          />
        ))}
      </InfiniteScroll>
    </BaseMain>
  );
}
