import axios from "axios";
import { db, auth } from "../firebase/firebase";
import { uid } from 'uid';
import { toggleLoggedIn } from "../redux/loggedInSlice";



export const signoutUser = (dispatch, navigate) => {
    navigate("/")
    dispatch(toggleLoggedIn(false))
    console.log('user Signed out')
};

