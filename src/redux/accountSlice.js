import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accounts:[]
   

 
  
};

const accountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setAccounts: (state, action) => {
      state.accounts = action.payload

    }
  }
   
});

export default accountSlice.reducer;

export const { setAccounts} = accountSlice.actions;
