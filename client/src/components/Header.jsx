import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="header">
      {/* LEFT */}
      <div className="logo">
        JUHealth+
        {user && (
          <span className="welcome">
            {" "} | Welcome, {user.name}
          </span>
        )}
      </div>

      {/* RIGHT PROFILE */}
      <div className="profile-wrapper">
        <div className="avatar">👤</div>

        <div className="dropdown">
          <div className="profile-item">My Profile</div>
          <div className="profile-item">Settings</div>
          <div className="profile-item">Help & Support</div>

          <div className="profile-item logout" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;