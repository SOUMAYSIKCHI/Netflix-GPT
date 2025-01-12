import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../CustomHooks/usePopularMovies'
import useTopRatedMovies from '../CustomHooks/useTopRatedMovies'
import useUpcomingMovies from '../CustomHooks/useUpcomingMovies'

const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  

  const state = useSelector(state=>state.movie)
  
  return (
    <div className='bg-black text-white'>
      <div className='z-800 mr-5 ml-4 '>
        <MovieList movies = {state.nowPlayingMovies} title="Now Playing Movies"/>
        <MovieList movies = {state.popularMovies} title="Popular Movies"/>
        <MovieList movies = {state.topRatedMovies} title="Top Rated Movies"/>
        <MovieList movies = {state.upcomingMovies} title="Upcoming Movies"/>

      </div>
    </div>
  )
}

export default SecondaryContainer