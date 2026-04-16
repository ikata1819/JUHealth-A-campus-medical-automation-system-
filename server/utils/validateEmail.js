function isJUEmail(email) {
  if (!email) return false;

  const cleanEmail = email.trim().toLowerCase();

  return /^[a-z0-9._%+-]+@juniv\.edu(\.bd)?$/.test(cleanEmail);
}

module.exports = isJUEmail;