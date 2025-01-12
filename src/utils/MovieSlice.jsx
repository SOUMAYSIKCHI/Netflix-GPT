import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.trailerVideo = action.payload;
        },
    }

})

export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addTrailerVideo} = MovieSlice.actions;

export default MovieSlice.reducer;