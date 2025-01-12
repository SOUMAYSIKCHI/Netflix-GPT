import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../utils/UserSlice"
import MovieReducer from "../utils/MovieSlice"
import ConfigReducer from "../utils/ConfigSlice"
 const store = configureStore({
    reducer:{
        user: UserReducer,
        movie: MovieReducer,
        config:ConfigReducer,
    }
})

export  default store