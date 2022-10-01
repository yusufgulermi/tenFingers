import { createSlice } from "@reduxjs/toolkit";

export const keystrokes = createSlice({
  name: "keystrokes",
  initialState: {
    value:0,
  },
  reducers: {
    getStrokes: (state,action) => {
      state.value += action.payload;

    },
  },
});

export const { getStrokes } = keystrokes.actions;

export default keystrokes.reducer;