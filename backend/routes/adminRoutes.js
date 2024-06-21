// // routes/adminRoutes.js
// const express = require('express');
// const router = express.Router();
// const adminController = require('../controllers/adminController');
// const authController = require('../controllers/authController');


// router.post('/admins', adminController.createAdmin);
// // Other admin routes can be defined here


// // Admin login
// router.post('/admin/login', authController.adminLogin);
// module.exports = router;
// backend/routes/adminRoutes.js


//adminRoutes
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticateUser, authorizeAdmin } = require('../middleware/authMiddleware');

// Define admin routes with authentication and authorization middleware

// Route for creating admins
router.post('/admins', authenticateUser, authorizeAdmin, adminController.createAdmin);


// Admin login route (only requires authentication)
// Admin login route (only requires authentication)
router.post('/admin/login', adminController.adminLogin);

// Route for fetching users (requires authentication and admin authorization)
router.get('/users', authenticateUser, authorizeAdmin, adminController.getUsers);

// Other admin routes can be defined here

// Protected admin route example
router.get('/admin-protected-resource', authenticateUser, authorizeAdmin, adminController.getAdminProtectedResource);

module.exports = router;

