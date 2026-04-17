import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(storedUser));
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="content">
      <div className="center-card">
        <h2>My Profile</h2>

        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {user.role && <p><strong>Role:</strong> {user.role}</p>}
          {user.id && <p><strong>ID:</strong> {user.id}</p>}
        </div>
      </div>
    </div>
  );
}

export default Profile;