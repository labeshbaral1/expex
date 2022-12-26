import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accounts: [],
    displayElements: []
 
  
};

const accountSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccounts: (state, action) => {
        state.accounts = [action.payload]

    },
    addAccount: (state, action) => {
        state.accounts.push(action.payload)
    },
    setDisplayElements: (state, action) => {
      state.displayElements = action.payload.displayElements
    }
  },
});

export default accountSlice.reducer;

export const { setAccounts, addAccount, setDisplayElements} = accountSlice.actions;
