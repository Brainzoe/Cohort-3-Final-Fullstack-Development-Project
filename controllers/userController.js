// controllers/userController.js

// Implementation for creating a new user

// Implementation for getting a user by ID

// Similar controllers for updating, deleting, and listing users

const User = require('../models/User');
const bcrypt = require('bcryptjs');

// exports.createUser = async (req, res) => {
//     try {
//       console.log('Received request to create a new user:', req.body);
//       const { username, email, password, role } = req.body;
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const newUser = new User({ username, email, password: hashedPassword, role });
//       await newUser.save();
//       console.log('New user created:', newUser);
//       res.status(201).json(newUser);
//     } catch (error) {
//       console.error('Error creating user:', error);
//       res.status(500).json({ error: error.message });
//     }
//   };
exports.createUser = async (req, res) => {
    try {
        console.log('Received request to create a new user:', req.body);
        const { username, email, password, role } = req.body;

        // Check if a user with the same username already exists
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ error: 'Username is already taken' });
        }

        // Check if a user with the same email already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: 'Email address is already registered' });
        }

        // If username and email are unique, proceed to create the user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, role });
        await newUser.save();
        console.log('New user created:', newUser);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: error.message });
    }
};

  
  
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
