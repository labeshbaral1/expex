import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLogged: false,
    apiLoading: false
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
 
    }
 
})
 
 
export default stateSlice.reducer
 
export const {toggleLoggedIn, toggleAPIloading} = stateSlice.actions
 
