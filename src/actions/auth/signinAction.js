import { db, auth } from "../../firebase/firebase";
import { main } from "../../actions/api/main";
import { toggleAPIloading, toggleLoggedIn } from "../../redux/stateSlice";
import { setUser } from "../../redux/userSlice";

export const loginUser = (email, password, dispatch, navigate) => {
  auth
    .signInWithEmailAndPassword(email, password)

    .then((auth) => {
      main(email, dispatch);


      db.collection("users")
        .doc(btoa(email))
        .collection("user-info")
        .doc("register-settings")
        .onSnapshot((snap) => {
          dispatch(
            setUser({
              name: snap.data().name,
              email: snap.data().email,
              uid: snap.data().uid,
            })
          );
        });

      navigate("/overview");
    })
    .catch((error) => alert(error.message));
    
  dispatch(toggleLoggedIn(true));
};
