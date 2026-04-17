import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HelpSupport() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple local storage simulation (later replace with API)
    const existing = JSON.parse(localStorage.getItem("supportTickets") || "[]");

    const newTicket = {
      ...form,
      id: Date.now(),
      user: JSON.parse(localStorage.getItem("user"))?.email || "unknown",
      date: new Date().toLocaleString(),
    };

    existing.push(newTicket);
    localStorage.setItem("supportTickets", JSON.stringify(existing));

    setSubmitted(true);
    setForm({ subject: "", message: "" });
  };

  return (
    <div className="content">
      <div className="center-card" style={{ maxWidth: "500px" }}>
        <h2>Help & Support</h2>

        {submitted && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Your issue has been submitted.
          </p>
        )}

        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <textarea
            name="message"
            placeholder="Describe your issue"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ width: "100%", padding: "10px" }}
          />

          <button className="btn btn-primary" type="submit" style={{ marginTop: "10px" }}>
            Submit
          </button>
        </form>

        <button
          style={{ marginTop: "15px", background: "transparent", border: "none", color: "blue", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default HelpSupport;