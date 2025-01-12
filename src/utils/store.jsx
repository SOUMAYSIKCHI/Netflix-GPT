import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../utils/UserSlice"
import MovieReducer from "../utils/MovieSlice"
 const store = configureStore({
    reducer:{
        user: UserReducer,
        movie: MovieReducer
    }
})

export  default store