

//adminController

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const User = require('../models/User'); // Import the User model

// Function to create a new admin
exports.createAdmin = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin with the hashed password
    const newAdmin = new Admin({ username, email, password: hashedPassword, role });

    // Save the admin to the database
    await newAdmin.save();

    res.status(201).json(newAdmin);
  } catch (error) {
    console.error('Error creating admin:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Admin login function
// Admin login function
exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find admin by username in database
    const admin = await Admin.findOne({ username });

    // If admin not found, return error
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, admin.password);

    // If password doesn't match, return error
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create JSON Web Token (JWT) payload
    const payload = {
      admin: {
        id: admin.id,
        username: admin.username,
        role: admin.role // Optionally include role in payload
      }
    };

    // Sign the token with a secret key and set expiration
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token, admin });
    });

  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Protected route for admins
exports.getAdminProtectedResource = async (req, res) => {
  try {
    res.json({ message: 'This is a protected resource for admins only' });
  } catch (error) {
    console.error('Error fetching protected resource:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all users (admin-only)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
