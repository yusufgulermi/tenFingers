import { createSlice } from "@reduxjs/toolkit";

export const inCorrectCount =createSlice({
    name:"inCorrectCount",
    initialState:{
        value:0,
    },
    reducers:{
        incrementInCor:(state)=>{
            state.value +=1
        },
        incrementInCorRes:(state,actions)=>{
            state.value=actions.payload
        }
    },
    
})
export const {incrementInCor,incrementInCorRes}=inCorrectCount.actions
export default inCorrectCount.reducer;