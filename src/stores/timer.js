import { createSlice } from "@reduxjs/toolkit";

export const timer = createSlice({
  name: "timer",
  initialState: {
    value:60,
  },
  reducers: {
    setTime:(state,action)=>{
      state.value=action.payload
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { decrement,setTime } = timer.actions;

export default timer.reducer;
