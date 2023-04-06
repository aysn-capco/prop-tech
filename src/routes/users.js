const express = require('express');

const router = express.Router();
const User = require('./models/User');

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) throw new Error('User not found');
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Update a user by ID
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) throw new Error('User not found');
    await user.update(req.body);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Delete a user by ID
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) throw new Error('User not found');
    await user.destroy();
    res.json({ message });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
