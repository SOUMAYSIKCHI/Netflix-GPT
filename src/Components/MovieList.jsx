import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <>
      {movies && (
        <div className="">
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <div className="flex overflow-x-auto scrollbar-hide space-x-4">
            {movies.map((ele) => (
              <MovieCard key={ele.id} imgurl={ele.poster_path} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieList;
