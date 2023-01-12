import { db, auth } from "../../firebase/firebase";
import { main } from "../../actions/api/main";
import {
  toggleAPIloading,
  toggleFirstTimeLogin,
  toggleLoggedIn,
} from "../../redux/stateSlice";
import { setUser } from "../../redux/userSlice";
import { setAssets } from "../../redux/accountSlice";

export const loginUser = (
  email,
  password,
  toggleError,
  firstTimeLogin,
  dispatch,
  navigate
) => {
  auth
    .signInWithEmailAndPassword(email, password)

    .then((user) => {
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

      main(email, dispatch).then((res) => {
        if (!res) {
          navigate("/about");
        } else {
          db.collection("users")
            .doc(btoa(email))
            .collection("additional_assets")
            .doc("assets")
            .onSnapshot((snap) => {
              console.log(snap.data().user_assets);
              dispatch(setAssets(snap.data().user_assets));
            });

          navigate("/overview");
        }
        dispatch(toggleLoggedIn(true));
      });
    })
    .catch((error) => toggleError(error));
};
