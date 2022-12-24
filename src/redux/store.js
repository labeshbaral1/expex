import {configureStore} from "@reduxjs/toolkit"


import loggedInReducer from "../redux/loggedInSlice"
import userReducer from "../redux/userSlice"
export const store = configureStore({
    reducer : {
        loggedIn: loggedInReducer,
        user: userReducer    
    
    }

})