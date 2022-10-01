import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: {
    value: "",
  },
  reducers: {
    increment: (state,action) => {
      state.value = action.payload;
    },
  },
});

export const { increment } = counter.actions;

export default counter.reducer;
