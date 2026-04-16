import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  return (
    <div className="content">
      <h1>Dashboard</h1>

      <div className="card">
        <h3>Patients</h3>
        <p>120 records</p>
      </div>

      <div className="card">
        <h3>Appointments</h3>
        <p>18 today</p>
      </div>

      <div className="card">
        <h3>Doctors</h3>
        <p>8 available</p>
      </div>
    </div>
  );
}

export default Dashboard;