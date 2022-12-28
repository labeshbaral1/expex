import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balances: [],
    accounts:[]
   

 
  
};

const accountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setBalances: (state, action) => {
      state.balances = action.payload.balances

    }
  }
   
});

export default accountSlice.reducer;

export const { setBalances} = accountSlice.actions;
