import React from "react";
import { useSelector } from "react-redux";
import Shimmer from "../Pages/Shimmer";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gptInputBtn = useSelector((state) => state.GptSlice.gptInputBtn);
  const movieNames = useSelector((state) => state.GptSlice.moviesList);
  const moviesResult = useSelector((state) => state.GptSlice.moviesResult);

  if (gptInputBtn && (!movieNames || !moviesResult)) {
    return <Shimmer />;
  }
  if (!movieNames || movieNames.length === 0) {
    return;
  }

  return (
    <div className="p-4 bg-black text-white bg-opacity-80">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={moviesResult[index] || []} // Handle missing results
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
