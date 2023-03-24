import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Signin.css";
import { loginUser } from "../../actions/auth/signinAction";
import { useSelector } from "react-redux";
import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const provider = new GoogleAuthProvider();

function Signin() {
  const navigate = useNavigate();
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const dispatch = useDispatch();
  const [error, toggleError] = useState(null);
  const firstTimeLogin = useSelector((state) => state.states.firstTimeLogin);
  const [googleEmail, updateGoogleEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    loginUser(email, password, toggleError, firstTimeLogin, dispatch, navigate);
    updateEmail("");
    updatePassword("");
  }

  // const { googleSignIn } = UserAuth();



  // const handleGoogleSignin = async () => {
  //   try {
  //     await googleSignIn();
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }
  // const auth = getAuth();
  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     console.log(user.email);
  //     updateEmail(user.email);
  //     updatePassword("deeznuts");
  //     handleSubmit();
  //     // navigate("/overview")
  //     // ...
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });

  return (
    <div className="signin">
      <form className="signin-form">
        <div className="bodyy">
          <div className="split left">
            <div className="top-logo">Expex</div>
            <div className="centered">
              <div className="login-items">
                <div className="login-title">Welcome back</div>
                <div className="login-desc">
                  Welcome back! Please enter your details.
                </div>
                <div className="small-email">Email</div>
                <input
                  type="text"
                  id="email"
                  className="em"
                  placeholder=" Enter your email"
                  value={email}
                  onChange={(e) => updateEmail(e.target.value)}
                  autoComplete = "off"
                />
                <div className="small-email">Password</div>
                <input
                  type="password"
                  id="password"
                  className="pass"
                  placeholder=" Enter password"
                  value={password}
                  onChange={(e) => updatePassword(e.target.value)}
                />
                <div className="forgot">Forgot password</div>
                {error && <div className="error">{error}</div>}
                <button className="goog1-but" onClick={handleSubmit} disabled={!email || !password}>
                  Sign in
                </button>
                <button className="goog2-but">Sign in with Google</button>
                <div className="new-acct">
                  <div className="new-acct1">Don't have an account?</div>
                  <div
                    onClick={() => navigate("/signup")}
                    className="new-acct2"
                  >
                    Sign Up
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="split right">
            <div className="centered">
              <div className="custum">
                <div className="double-ee">ƎE</div>
                <div className="namee">EXPEX</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signin;
