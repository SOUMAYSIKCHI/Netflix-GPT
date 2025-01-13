import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { addNowPlayingMovies } from '../utils/MovieSlice'
import { useDispatch, useSelector } from 'react-redux'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const isPresent = useSelector((state)=>state.movie.nowPlayingMovies)
    const getNowPlayingMovies = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
      const out = await data.json();
      dispatch(addNowPlayingMovies(out.results));
  
    }
    useEffect(()=>{
     !isPresent && getNowPlayingMovies();
    },[])

}

export default useNowPlayingMovies