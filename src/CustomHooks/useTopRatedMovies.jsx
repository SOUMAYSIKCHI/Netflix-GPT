import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch ,useSelector} from 'react-redux'
import { addTopRatedMovies } from '../utils/MovieSlice'

const useTopRatedMovies = () => {
     const dispatch = useDispatch();
     const isPresent = useSelector((state)=>state.movie.topRatedMovies)

      const getNowPlayingMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?page=1",
          API_OPTIONS
        );
        const out = await data.json();
        dispatch(addTopRatedMovies(out.results));
      };
      useEffect(() => {
        !isPresent && getNowPlayingMovies();
      }, []);
}

export default useTopRatedMovies