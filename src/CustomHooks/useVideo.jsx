import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch,useSelector} from 'react-redux'
import { addTrailerVideo } from '../utils/MovieSlice';

const useVideo = (id) => {
    const dispatch = useDispatch();
    const isPresent = useSelector((state)=>state.movie.trailerVideo)
    const fetchVideo = async function(){
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,API_OPTIONS);
        const op = await res.json();
        const movieData = op.results;
        const filteredTrailer = movieData.filter((ele)=>ele.type==="Trailer")
        const finalTrailer = filteredTrailer.length===0? movieData[0] :filteredTrailer[0];
        dispatch(addTrailerVideo(finalTrailer.key));

    }

    useEffect(()=>{
      !isPresent&&  fetchVideo();
    },[])
}

export default useVideo