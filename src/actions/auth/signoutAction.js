
import { toggleLoggedIn } from "../../redux/stateSlice";



export const signoutUser = (dispatch, navigate) => {
    navigate("/")
    dispatch(toggleLoggedIn(false))
    console.log('user Signed out')
    //restore store
    // dispatch(reset());

};

