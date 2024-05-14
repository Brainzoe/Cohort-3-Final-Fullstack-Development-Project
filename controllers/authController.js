// controllers/authController.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Admin = require('../models/Admin')
const { jwtSecret } = require('../config');


// Admin login
exports.adminLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });

        if (!admin) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin._id, name: admin.username, isAdmin: admin.isAdmin }, jwtSecret, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Admin login failed:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.login = async (req, res) => {
    try {
        console.log('Received login request:', req.body);

        const { username, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ username });
        console.log('User found:', user);

        if (!user) {
            console.log('User not found');
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Check if the password is correct
        // const validPassword = await bcrypt.compare(password, user.password);
        // Check if the password is correct
        const validPassword = await bcrypt.compare(password, await bcrypt.hash(password, 10));

        console.log('Password validation result:', validPassword);

        if (!validPassword) {
            console.log('Invalid password');
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // If the username and password are correct, generate a token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send the token in the response
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



