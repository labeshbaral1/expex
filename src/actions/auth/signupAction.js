import { db, auth } from "../../firebase/firebase";
import { uid } from "uid";

export const signupUser = (name, email, password, navigate) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      if (auth.additionalUserInfo.isNewUser) {
        db.collection("users")
          .doc(btoa(email))
          .collection("user-info")
          .doc("register-settings")
          .set({
            uid: uid(),
            name: name,
            email: email,
            created: new Date(),
          });
          
          db.collection("users")
          .doc(btoa(email))
          .collection("additional_assets")
          .doc("assets")
          .set({
            user_assets: []
          });

        navigate("/signin");
      }
    })
    .catch((error) => alert(error.message));
};
