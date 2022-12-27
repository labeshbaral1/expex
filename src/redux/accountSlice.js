import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accounts: [],
    displayElements: [],
    balance: 0
 
  
};

const accountSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccounts: (state, action) => {
        state.accounts = action.payload
    },
    addAccount: (state, action) => {
        state.accounts.push(action.payload)
    },
    setBalance: (state, action) => {
      state.accounts.balance = action.payload.balance
    },
    setDisplayElements: (state, action) => {
      state.displayElements = action.payload.displayElements
    }
  },
});

export default accountSlice.reducer;

export const { setAccounts, addAccount, setDisplayElements, setBalance} = accountSlice.actions;
