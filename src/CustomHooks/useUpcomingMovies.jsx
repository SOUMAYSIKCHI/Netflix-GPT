import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch,useSelector } from 'react-redux'
import { addUpcomingMovies } from '../utils/MovieSlice'
const useUpcomingMovies = () => {
   const dispatch = useDispatch();
   const isPresent = useSelector((state)=>state.movie.upcomingMovies)


    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const out = await data.json();
      dispatch(addUpcomingMovies(out.results));
    };
    useEffect(() => {
     !isPresent && getNowPlayingMovies();
    }, []);
}

export default useUpcomingMovies