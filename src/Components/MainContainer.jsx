import React from "react";
import { useSelector } from "react-redux";
import MovieDetail from "./MovieDetail";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const movie = useSelector((state) => state?.movie?.nowPlayingMovies);
  if(!movie) return;

  const updatedMovie = movie[0];

  return (
    <div>
      <MovieDetail title={updatedMovie?.original_title} desc={updatedMovie.overview} />
      <VideoContainer id={updatedMovie?.id} />
    </div>
  );
};

export default MainContainer;
