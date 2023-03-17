import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../actions/auth/signupAction";

function Signup() {


  const [name, updateName] = useState(
    "user" + String(Math.floor(Math.random() * 1000 + 1))
  );
  const [email, updateEmail] = useState("@gmail.com");
  const [password, updatePassword] = useState("");
  const [number, updateNumber] = useState("");

  const navigate = useNavigate();

  return (
    <div className="signup">
      <div className='top-logo2'>Expex</div>
      <div className="signup-cont">
        <form
          className="signup-form "
          onSubmit={(event) => {
            event.preventDefault();
            signupUser(name, email, password, navigate);
          }}
        >
          <div className="intro-text">
            Sign Up.
          </div>
          <div className='small-name'>Username</div>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => updateName(e.target.value)}
            className='up'
          />
          <div className='small-email2'>Email</div>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => updateEmail(e.target.value)}
            className='up'
          />
          <div className='small-pass2'>Password (6-25 characters)</div>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
            className='up'
          />
         

<div className='small-pass2'>Enter Phone Number</div>
          <input
            type="number"
            id="phone"
            placeholder="Enter Phone Number"
            value={number}
            onChange={(e) => updateNumber(e.target.value)}
            className='up'
          />

          <button className="signup-but">Sign Up</button>
          <div className="divider-tot">
            <div className="divider1">_______________</div>
            <div className="divider2">_______________</div>
          </div>
          <div className="or">or</div>
          <button className='goog2-reg'>Sign up with Google</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
