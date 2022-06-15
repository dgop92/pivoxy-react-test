import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getEpisodes } from "rickmortyapi";
import { EpisodeCard } from "../EpisodeCard";
import { BaseMain, LoadingMessage } from "./style";

const infinityStyles = {
  gap: "1rem",
  gridTemplateColumns: "repeat(auto-fill, minmax(325px, 1fr))",
  display: "grid",
};

export default function Main({ searchTerm }) {
  const [state, setState] = useState({
    currentPage: 1,
    episodes: [],
    hasMore: true,
    searchFlag: true,
  });

  const fetchMoreData = async (resetPageCount = false) => {
    const responseData = await getEpisodes({
      page: resetPageCount ? 1 : state.currentPage,
      name: searchTerm,
    });

    let episodes;
    let nextUrl;

    if (responseData.status === 404) {
      episodes = [];
      nextUrl = null;
    } else {
      episodes = responseData.data.results;
      nextUrl = responseData.data.info.next;
    }

    if (resetPageCount) {
      setState({
        currentPage: 2,
        episodes: episodes,
        hasMore: nextUrl !== null,
      });
    } else {
      setState((oldState) => ({
        currentPage: oldState.currentPage + 1,
        episodes: [...oldState.episodes, ...episodes],
        hasMore: nextUrl !== null,
      }));
    }
  };

  useEffect(() => {
    // first time rendering the component
    if (searchTerm === "" && state.currentPage === 1) {
      fetchMoreData();
    } else {
      fetchMoreData(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <BaseMain id="baseMain">
      <InfiniteScroll
        dataLength={state.episodes.length}
        next={fetchMoreData}
        hasMore={state.hasMore}
        loader={<LoadingMessage>Loading...</LoadingMessage>}
        style={infinityStyles}
        scrollableTarget="baseMain"
      >
        {state.episodes.map((data) => (
          <EpisodeCard
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
