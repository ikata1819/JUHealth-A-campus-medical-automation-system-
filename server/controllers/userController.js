const { updateUser } = require("../models/userModel");

// UPDATE PROFILE
exports.updateProfile = (req, res) => {
  const userId = req.user.id;

  const { name, role, dob, blood_group, gender, university_id } = req.body;

  updateUser(
    userId,
    { name, role, dob, blood_group, gender, university_id },
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Profile updated");
    }
  );
};