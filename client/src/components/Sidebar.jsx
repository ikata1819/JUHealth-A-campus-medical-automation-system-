import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button>Find Doctor</button>
      <button>Appointments</button>
      <button>Records</button>

      <hr />

      <button
        style={{ background: "red" }}
        onClick={() => navigate("/emergency")}
      >
        🚨 Emergency
      </button>
    </div>
  );
}

export default Sidebar;