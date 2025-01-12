import React  from 'react'
import Header from '../Components/Header'
import useNowPlayingMovies from '../CustomHooks/useNowPlayingMovies'
import MainContainer from '../Components/MainContainer';
import SecondaryContainer from '../Components/SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
 
  return (
    <div>
        <Header/>
        {/* 
          -Main Component
              -bg video
              -title
          -Secondary Component

        */}
        <MainContainer/>
        <SecondaryContainer/>
        
    </div>
  )
}

export default Browse