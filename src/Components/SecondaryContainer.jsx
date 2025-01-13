import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../CustomHooks/usePopularMovies'
import useTopRatedMovies from '../CustomHooks/useTopRatedMovies'
import useUpcomingMovies from '../CustomHooks/useUpcomingMovies'
import lang from "../utils/LangConst"

const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const selectedLang = useSelector(state => state.config.language);
  const state = useSelector(state=>state.movie)
  
  return (
    <div className='bg-black text-white '>
      <div className='z-800 mr-5 bg-black pb-[120px] ml-4 -mt-24 relative lg:-mt-44  '>
        <MovieList movies = {state.nowPlayingMovies} title={lang[selectedLang].Now_Playing_Movies}/>
        <MovieList movies = {state.popularMovies} title={lang[selectedLang].Popular_Movies}/>
        <MovieList movies = {state.topRatedMovies} title={lang[selectedLang].Top_Rated_Movies}/>
        <MovieList movies = {state.upcomingMovies} title={lang[selectedLang].Upcoming_Movies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer