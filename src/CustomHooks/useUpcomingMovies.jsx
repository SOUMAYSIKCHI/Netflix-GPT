import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/MovieSlice'
const useUpcomingMovies = () => {
   const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const out = await data.json();
      dispatch(addUpcomingMovies(out.results));
    };
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useUpcomingMovies