import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  // state for inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login function
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      // save token
      localStorage.setItem("token", res.data.token);

      // optional: save user info
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Login failed. Check credentials.");
    }
  };

  return (
    <div className="content">
      <div className="center-card">
        <h2 style={{ fontSize: "32px" }}>Login</h2>

        <input
          placeholder="University Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary"
          style={{ width: "100%", marginTop: "15px" }}
          onClick={handleLogin}   
        >
          Login
        </button>

        {/* REGISTER LINK */}
        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Not registered?{" "}
          <span
            onClick={() => navigate("/register")}
            style={{
              color: "#208b3a",
              cursor: "pointer",
              fontWeight: "600",
              textDecoration: "underline"
            }}
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;