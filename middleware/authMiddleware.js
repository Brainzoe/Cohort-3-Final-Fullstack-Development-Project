// middleware/authMiddleware.js

// exports.authenticateUser = (req, res, next) => {

// exports.authorizeAdmin = (req, res, next) => {

// Error handling middleware

const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
const User = require('../models/User');
const Admin = require('../models/Admin');

exports.authenticateUser = (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log('Received token:', token);
    const decoded = jwt.verify(token, jwtSecret);
    console.log('Decoded user:', decoded);
    req.user = decoded; // Attach the decoded user to the request object
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      // Invalid token format or signature
      console.error('Invalid token:', error);
      return res.status(401).json({ error: 'Invalid token' });
    } else if (error.name === 'TokenExpiredError') {
      // Token has expired
      console.error('Token expired:', error);
      return res.status(401).json({ error: 'Token expired' });
    }
    // Other errors
    console.error('Authentication failed:', error);
    res.status(401).json({ error: 'Authentication failed' });
  }
};

exports.authorizeAdmin = async (req, res, next) => {
  try {
    const userId = req.user.id; // Assuming the decoded token contains user ID
    console.log('Decoded user ID:', userId);
    const admin = await Admin.findById(userId);
    console.log('Retrieved user:', admin);
    if (!admin || admin.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized access' });
    }
    next();
  } catch (error) {
    console.error('Authorization failed:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.errorHandler = (err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: 'Internal server error' });
};