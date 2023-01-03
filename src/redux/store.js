import {configureStore} from "@reduxjs/toolkit"


import stateReducer from "../redux/stateSlice"
import userReducer from "../redux/userSlice"
import accountsReducer from "../redux/accountSlice"

export const store = configureStore({
    reducer : {
        states: stateReducer,
        user: userReducer,
        accounts: accountsReducer    
    }

})