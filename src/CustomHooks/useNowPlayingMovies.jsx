import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { addNowPlayingMovies } from '../utils/MovieSlice'
import { useDispatch } from 'react-redux'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
      const out = await data.json();
      dispatch(addNowPlayingMovies(out.results));
  
    }
    useEffect(()=>{
      getNowPlayingMovies();
    },[])

}

export default useNowPlayingMovies