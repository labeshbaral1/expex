import {configureStore} from "@reduxjs/toolkit"


import loggedInReducer from "../redux/loggedInSlice"
import userReducer from "../redux/userSlice"
import accountsReducer from "../redux/accountSlice"

export const store = configureStore({
    reducer : {
        loggedIn: loggedInReducer,
        user: userReducer,
        accounts: accountsReducer
    
    }

})