//authMiddleware

// authMiddleware.js
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin'); // Ensure correct model import

exports.authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    console.log('Decoded JWT:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ error: 'Token is not valid' });
  }
};

exports.authorizeAdmin = async (req, res, next) => {
  try {
    if (!req.user || !req.user.admin) {
      return res.status(401).json({ error: 'No token, authorization denied' });
    }

    const admin = await Admin.findById(req.user.admin.id);
    console.log('Admin:', admin);

    if (!admin || admin.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied' });
    }

    next();
  } catch (error) {
    console.error('Authorization error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
