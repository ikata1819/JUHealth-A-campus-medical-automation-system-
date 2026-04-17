import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="content">
      <div className="center-card">
        <h2>Settings</h2>

        <p style={{ marginTop: "15px", color: "#555" }}>
          Account settings will be available here (password change, notifications, etc.).
        </p>

        <button
          className="btn btn-primary"
          style={{ marginTop: "20px" }}
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout from All Devices
        </button>
      </div>
    </div>
  );
}

export default Settings;