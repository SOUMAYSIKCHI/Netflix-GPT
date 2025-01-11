import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../utils/UserSlice"
 const store = configureStore({
    reducer:{
        user: UserReducer
    }
})

export  default store