import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="content">
      <div className="center-card">
        <h1 style={{ fontSize: "52px", fontWeight: "900" }}>
          Welcome to JUHealth+
        </h1>

        <p style={{ fontSize: "18px", color: "#444" }}>
          Smart University Medical System
        </p>

        <div style={{ marginTop: "25px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/register")}
            style={{ background: "#1a7431" }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;