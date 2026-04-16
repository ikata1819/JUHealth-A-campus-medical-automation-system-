const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  createUser,
  findUserByEmail
} = require("../models/userModel");

const isJUEmail = require("../utils/validateEmail");

// REGISTER
exports.register = async (req, res) => {
  const { name, email, password, role, dob, blood_group, gender, university_id } = req.body;

  if (!isJUEmail(email)) {
    return res.status(400).send("Use university email");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  createUser(
    {
      name,
      email,
      password: hashedPassword,
      role,
      dob,
      blood_group,
      gender,
      university_id
    },
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("User registered");
    }
  );
};

// LOGIN
exports.login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, async (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.length === 0) {
      return res.status(400).send("User not found");
    }

    const user = result[0];

    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(400).send("Wrong password");

    const token = jwt.sign(
      { id: user.id, role: user.role },
      "secretkey",
      { expiresIn: "1d" }
    );

    res.send({ token, user });
  });
};