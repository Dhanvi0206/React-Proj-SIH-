import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Please enter Email");
      return;
    }

    if (password.trim() === "") {
      alert("Please enter Password");
      return;
    }

    if (role === "") {
      alert("Please select User Role");
      return;
    }

    if (role !== "Team Leader") {
      alert("Only Team Leader can proceed");
      return;
    }

    // Navigate to Problem Statements page
    navigate("/problems");
  };

  return (
    <div className="login-container-page">
      <h1 className="login-title">SIH Portal Login</h1>

      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select User Role</option>

            <option>Super Admin</option>

            <option>Review Committee Personnel</option>

            <option>Problem Statement Creators/Challengers</option>

            <option>College/Institute Spoc</option>

            <option>Team Leader</option>

            <option>Evaluator</option>
          </select>

          <p className="forgot">Forgot Your Password?</p>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
