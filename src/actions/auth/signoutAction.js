
import { resetAccountSlice } from "../../redux/accountSlice";
import { resetStateSlice, toggleLoggedIn} from "../../redux/stateSlice";
import { resetUserSlice } from "../../redux/userSlice";



export const signoutUser = (dispatch, navigate) => {
    dispatch(toggleLoggedIn(false))
    dispatch(resetUserSlice())
    dispatch(resetAccountSlice())
    navigate("/")
    console.log("userSigned out")
   
};

