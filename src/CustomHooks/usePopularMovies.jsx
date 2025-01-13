import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch ,useSelector} from "react-redux";
import { addPopularMovies } from "../utils/MovieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const isPresent = useSelector((state)=>state.movie.popularMovies)

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const out = await data.json();
    dispatch(addPopularMovies(out.results));
  };
  
  useEffect(() => {
   !isPresent && getNowPlayingMovies();
  }, []);
};

export default usePopularMovies;
