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
    .then(() => {
      return (
        db
          .collection("users")
          .doc(btoa(email))
          .collection("accounts")
          .doc("accessTokens")
          .get() || null
      );
    })
    .then((accessTokensDoc) => {
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

      if (accessTokensDoc.exists) {
        
        main(accessTokensDoc, dispatch);
        db.collection("users")
          .doc(btoa(email))
          .collection("additional_assets")
          .doc("assets")
          .onSnapshot((snap) => {
            dispatch(setAssets(snap.data().user_assets));
          });

        navigate("/overview");
      } else {
        dispatch(toggleFirstTimeLogin(true));
        navigate("/about");

      }
      dispatch(toggleLoggedIn(true));

    }).catch(e => toggleError(e.message.slice(10))) 
 
};
