import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../actions/signupAction";
import { db, auth } from "../../firebase/firebase";

function Signup() {
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="signup">
      <h1> Expex Sign Up</h1>

      <form
        className="signup-form "
        onSubmit={(event) => {
          event.preventDefault();
          auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
              if (auth.additionalUserInfo.isNewUser) {
                db.collection("users")
                  .doc(email)
                  .collection("user-info")
                  .doc("register-settings")
                  .set({
                    email: email,
                    created: new Date(),
                  });

                  navigate("/signin");
              }
            })
            .catch((error) => alert(error.message));

        }}
      >
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => updateEmail(e.target.value)}
        />
        <input
          type="text"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => updatePassword(e.target.value)}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
