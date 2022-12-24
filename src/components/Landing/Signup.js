import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../actions/signupAction";

function Signup() {
  const [name, updateName] = useState(
    "user" + String(Math.floor(Math.random() * 1000 + 1))
  );
  const [email, updateEmail] = useState("@gmail.com");
  const [password, updatePassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="signup">
      <h1> Expex Sign Up</h1>

      <form
        className="signup-form "
        onSubmit={(event) => {
          event.preventDefault();
          signupUser(name, email, password, navigate);
        }}
      >
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => updateName(e.target.value)}
        />
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
