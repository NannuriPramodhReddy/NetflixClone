// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByEmail, createUser } = require('../models/userModel');

// Register user
const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = findUserByEmail(email);
  if (existingUser) return res.status(400).json({ message: 'User already exists' });

  const newUser = await createUser(email, password);
  const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(201).json({ token });
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = findUserByEmail(email);
  if (!user) return res.status(400).json({ message: 'User not found' });

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token });
};

module.exports = { registerUser, loginUser };
