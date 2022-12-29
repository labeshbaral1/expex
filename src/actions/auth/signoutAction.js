
import { toggleLoggedIn } from "../../redux/loggedInSlice";



export const signoutUser = (dispatch, navigate) => {
    navigate("/")
    dispatch(toggleLoggedIn(false))
    console.log('user Signed out')
    //restore store
    // dispatch(reset());

};

