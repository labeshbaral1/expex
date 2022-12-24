import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLogged: false
}


const loggedInSlice = createSlice({
    name: "loggedIn",
    initialState,
    reducers:{
        toggleLoggedIn: (state, action) => {
            state.isLogged = action.payload
        }
 
    }
 
})
 
 
export default loggedInSlice.reducer
 
export const {toggleLoggedIn} = loggedInSlice.actions
 
