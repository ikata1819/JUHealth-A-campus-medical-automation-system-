import { useEffect, useState } from "react";

function Dashboard() {
  const [doctors, setDoctors] = useState([]);
  const [ambulances, setAmbulances] = useState([]);
  const [filter, setFilter] = useState("available"); // default

  // Fetch doctors based on filter
  useEffect(() => {
    fetch(`http://localhost:5000/api/doctors?type=${filter}`)
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.log(err));
  }, [filter]);

  // Fetch ambulances once
  useEffect(() => {
    fetch("http://localhost:5000/api/ambulances")
      .then((res) => res.json())
      .then((data) => setAmbulances(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="content">
      <h1>Dashboard</h1>

      {/* Doctors Section */}
      <div className="section">
        <h2>Doctors</h2>

        {/* Buttons */}
        <div style={{ marginBottom: "10px" }}>
          <button
            onClick={() => setFilter("available")}
            style={{ background: filter === "available" ? "#ccc" : "" }}
          >
            Available
          </button>
          <button
  onClick={() => setFilter("all")}
  style={{ background: filter === "all" ? "#ccc" : "" }}
>
  All
</button>
        </div>

        <div className="grid">
          {doctors.map((doc) => (
            <div className="card" key={doc.id}>
              <h3>{doc.name}</h3>
              <p>{doc.specialization}</p>
              <p>Status: {doc.availability ? "Available" : "Unavailable"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ambulances Section */}
      <div className="section">
        <h2>Ambulance List</h2>

        <div className="grid">
          {ambulances.map((amb) => (
            <div className="card" key={amb.id}>
              <h3>{amb.id}</h3>
              <p>Status: {amb.status}</p>
              <p>Location: {amb.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
