import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  uid: null, 
  linkToken: null,
  transactions: []
  
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
    setLinkToken: (state, action) => {
        state.linkToken = action.payload.linkToken
    },
    setTransactions: (state, action) => {
        state.transactions = action.payload.transactions
    }
  },
});

export default userSlice.reducer;

export const { setUser, setLinkToken, setTransactions} = userSlice.actions;
