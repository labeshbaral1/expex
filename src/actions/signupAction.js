import axios from "axios";
import { db, auth } from "../firebase/firebase";
import { uid } from 'uid';



export const signupUser = (name, email, password, navigate) => {
  auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
              if (auth.additionalUserInfo.isNewUser) {
                db.collection("users")
                  .doc(email)
                  .collection("user-info")
                  .doc("register-settings")
                  .set({
                    uid: uid(),
                    name: name,
                    email: email,
                    created: new Date(),
                  });

                  navigate("/signin");
              }
            })
            .catch((error) => alert(error.message));

};

