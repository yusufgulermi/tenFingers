import { createSlice } from "@reduxjs/toolkit";

export const isUpdated =createSlice({
    name:"isUpdated",
    initialState:{
        value:false,
    },
    reducers:{
        isUpdate:(state,actions)=>{
            state.value=actions.payload
        }
    },
    
})
export const {isUpdate}=isUpdated.actions
export default isUpdated.reducer;