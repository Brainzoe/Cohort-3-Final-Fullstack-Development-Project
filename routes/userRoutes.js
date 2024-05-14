// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateUser, authorizeAdmin } = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');

// Create a new user
router.post('/users', userController.createUser);

router.post('/admin/login', authenticateUser, authController.adminLogin); // Assuming this is your admin login route

// Route for user login
router.post('/login', authController.login);

// Get a user by ID
router.get('/users/:id', authenticateUser, userController.getUserById);

// Update a user by ID
router.put('/users/:id', authenticateUser, userController.updateUser);

// Delete a user by ID
router.delete('/users/:id', authenticateUser, userController.deleteUser);

// Get a list of all users (only accessible to admin users)
router.get('/users', authenticateUser, authorizeAdmin, userController.listUsers);

module.exports = router;
