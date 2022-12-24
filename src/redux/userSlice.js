import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    name: null,
    email: null
}


const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
        }
 
    }
 
})
 
 
export default userSlice.reducer
 
export const {setUser} = userSlice.actions
 
