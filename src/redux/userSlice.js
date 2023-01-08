import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  uid: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    resetUserSlice: (state, action) => {
      state.name = null
      state.email = null
      state.uid = null
    }
  }
  }
);

export default userSlice.reducer;

export const { setUser, resetUserSlice} = userSlice.actions;
