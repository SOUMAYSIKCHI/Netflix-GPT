import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/MovieSlice'

const useTopRatedMovies = () => {
     const dispatch = useDispatch();
      const getNowPlayingMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?page=1",
          API_OPTIONS
        );
        const out = await data.json();
        dispatch(addTopRatedMovies(out.results));
      };
      useEffect(() => {
        getNowPlayingMovies();
      }, []);
}

export default useTopRatedMovies