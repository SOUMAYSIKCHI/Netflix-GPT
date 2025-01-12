import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
    name:"configslice",
    initialState:{
        language:"en",
    },
    reducers:{
        chooseLang: (state,action)=>{
            state.language = action.payload;
        }
    }

})

export const {chooseLang} = ConfigSlice.actions;

export default ConfigSlice.reducer;