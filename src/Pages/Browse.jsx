import React  from 'react'
import Header from '../Components/Header'
import useNowPlayingMovies from '../CustomHooks/useNowPlayingMovies'
import MainContainer from '../Components/MainContainer';
import SecondaryContainer from '../Components/SecondaryContainer';
import { useSelector } from 'react-redux';
import GptSearch from "../Components/GptSearch"

const Browse = () => {
  useNowPlayingMovies();
  const GptSlice = useSelector((state)=> state.GptSlice.showGptSearch);
 
  return (
    <div>
        <Header/>
        {/* 
          -Main Component
              -bg video
              -title
          -Secondary Component

        */}
        {GptSlice? (<>
        <GptSearch/>
        </>):(<>
         <MainContainer/>
        <SecondaryContainer/>
        </>)
        
      }

        
    </div>
  )
}

export default Browse