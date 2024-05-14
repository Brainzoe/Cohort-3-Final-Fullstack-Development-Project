// controllers/adminController.js
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');


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

// Other admin-related methods can be added here as needed
