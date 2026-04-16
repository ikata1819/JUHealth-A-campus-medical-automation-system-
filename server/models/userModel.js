const db = require("../config/db");

const createUser = (data, callback) => {
  const sql = `
    INSERT INTO users 
    (name, email, password, role, dob, blood_group, gender, university_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, Object.values(data), callback);
};

const findUserByEmail = (email, callback) => {
  db.query("SELECT * FROM users WHERE email=?", [email], callback);
};

const updateUser = (id, data, callback) => {
  const sql = `
    UPDATE users SET 
    name=?, role=?, dob=?, blood_group=?, gender=?, university_id=?
    WHERE id=?
  `;

  db.query(sql, [...Object.values(data), id], callback);
};

module.exports = {
  createUser,
  findUserByEmail,
  updateUser
};