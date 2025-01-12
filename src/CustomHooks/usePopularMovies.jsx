import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/MovieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const out = await data.json();
    dispatch(addPopularMovies(out.results));
  };
  
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default usePopularMovies;
