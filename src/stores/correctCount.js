import { createSlice } from "@reduxjs/toolkit";

export const correctCount =createSlice({
    name:"correctCount",
    initialState:{
        value:0,
    },
    reducers:{
        incrementCor:(state)=>{
            state.value +=1
        },
        incrementCorRes:(state,actions)=>{
            state.value=actions.payload
        }
    },
    
})
export const {incrementCor,incrementCorRes}=correctCount.actions
export default correctCount.reducer;