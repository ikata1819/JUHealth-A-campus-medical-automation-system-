import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  // form state
  const [form, setForm] = useState({
    name: "",
    university_id: "",
    email: "",
    password: ""
  });

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // register function
  const handleRegister = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          ...form,
          role: "Student",      // default for now
          dob: null,
          blood_group: null,
          gender: null
        }
      );

      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed. Use JU email.");
    }
  };

  return (
    <div className="content">
      <div className="center-card">
        <h2 style={{ fontSize: "32px" }}>Register</h2>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          name="university_id"
          placeholder="University ID"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="University Email"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button
          className="btn btn-primary"
          style={{ width: "100%", marginTop: "15px" }}
          onClick={handleRegister}   // ✅ changed
        >
          Create Account
        </button>

        {/* LOGIN LINK */}
        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{
              color: "#208b3a",
              cursor: "pointer",
              fontWeight: "600",
              textDecoration: "underline"
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;