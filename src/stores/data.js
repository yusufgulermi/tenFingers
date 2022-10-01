import { createSlice } from "@reduxjs/toolkit";

export const data = createSlice({
  name: "data",
  initialState: {
    value:""
  },
  reducers: {
    getData: (state,action) => {
      state.value = action.payload;

    },
  },
});

export const { getData } = data.actions;

export default data.reducer;
