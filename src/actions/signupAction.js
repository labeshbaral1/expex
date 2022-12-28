import { db, auth } from "../firebase/firebase";
import { uid } from 'uid';



export const signupUser = (name, email, password, navigate) => {


console.log("SUA btoa of "+ email + "is:"  + btoa(email))
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

                  navigate("/signin");
              }
            })
            .catch((error) => alert(error.message));

};

