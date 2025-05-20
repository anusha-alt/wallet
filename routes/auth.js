const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const users = require('../models/User');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = users.find(u => u.email === email);

  if (userExists) return res.status(400).json({ error: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ id: users.length + 1, name, email, password: hashedPassword });

  res.json({ message: "Registered successfully" });
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user) return res.status(400).json({ error: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
