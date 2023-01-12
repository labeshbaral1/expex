import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLogged: false,
    apiLoading: false,
    firstTimeLogin: false    
}


const stateSlice = createSlice({
    name: "states",
    initialState,
    reducers:{
        toggleLoggedIn: (state, action) => {
            state.apiLoading = action.payload
            state.isLogged = action.payload
        },
        toggleAPIloading: (state, action) => {
            state.apiLoading = action.payload
        }
        ,
        toggleFirstTimeLogin: (state, action) => {
            state.firstTimeLogin = action.payload
        }

 

    }
 
})
 
 
export default stateSlice.reducer
 
export const {toggleLoggedIn, toggleAPIloading, toggleFirstTimeLogin} = stateSlice.actions
 
