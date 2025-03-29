// models/userModel.js
const bcrypt = require('bcryptjs');

let users = []; // In-memory storage for users.

const findUserByEmail = (email) => users.find(user => user.email === email);

const createUser = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { email, password: hashedPassword };
  users.push(newUser);
  return newUser;
};

module.exports = { findUserByEmail, createUser };
