import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../utils/UserSlice"
import MovieReducer from "../utils/MovieSlice"
import ConfigReducer from "../utils/ConfigSlice"
import GptSliceReducer from "../utils/GptSlice"
 const store = configureStore({
    reducer:{
        user: UserReducer,
        movie: MovieReducer,
        config:ConfigReducer,
        GptSlice:GptSliceReducer,
    }
})

export  default store