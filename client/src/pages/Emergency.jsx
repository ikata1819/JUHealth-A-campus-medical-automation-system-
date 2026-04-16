function Emergency() {
  return (
    <div className="content">
      <h1 style={{ color: "red" }}>Emergency</h1>

      <div className="card">
        <h3>🚑 Ambulance</h3>
        <p>Call: 01700000000</p>
      </div>

      <div className="card">
        <h3>Verify Student ID</h3>
        <input placeholder="Enter ID" />
        <br /><br />
        <button className="btn btn-primary">
          Request Help
        </button>
      </div>
    </div>
  );
}

export default Emergency;