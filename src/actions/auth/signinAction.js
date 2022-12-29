import { db, auth } from "../../firebase/firebase";
import { toggleLoggedIn } from "../../redux/loggedInSlice";
import { setUser } from "../../redux/userSlice";
import { updateBalances } from "../api/balance";

export const loginUser = (email, password, dispatch, navigate) => {

  auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
      db.collection("users")
        .doc(btoa(email))
        .collection("user-info")
        .doc("register-settings")
        .onSnapshot((snap) => {
          dispatch(
            setUser({
              name: snap.data().name,
              email: snap.data().email,
              uid: snap.data().uid
              
            })
          );
        });




      navigate("/");
    })
    .catch((error) => alert(error.message));
    dispatch(toggleLoggedIn(true))
    updateBalances(email, dispatch)

};


