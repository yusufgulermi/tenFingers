import { createSlice } from "@reduxjs/toolkit";

export const data = createSlice({
  name: "data",
  initialState: {
    value:"",
    password:"",
    confirmPassword:"",
  },
  reducers: {
    getData: (state,action) => {
      state.value = action.payload;
    },
    getPsw: (state,action) => {
      state.password = action.payload;
    },
    getConfirmPsw:(state,action) => {
      state.confirmPassword = action.payload;
    },
  },
});

export const { getData,getPsw,getConfirmPsw } = data.actions;

export default data.reducer;
