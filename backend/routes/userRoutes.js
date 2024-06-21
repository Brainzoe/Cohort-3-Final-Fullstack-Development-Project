//userRoutes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { authenticateUser, authorizeAdmin } = require('../middleware/authMiddleware');

// Create a new user
router.post('/signup', userController.createUser);

// Route for user login
router.post('/login', authController.login);

// Route to get a user by ID
router.get('/users/:id', authenticateUser, userController.getUserById);

// Route to update a user by ID
router.put('/users/:id', authenticateUser, userController.updateUser);

// Route to delete a user by ID
router.delete('/users/:id', authenticateUser, userController.deleteUser);

// Route to get a list of all users (only accessible to admin users)
router.get('/users', authenticateUser, authorizeAdmin, userController.listUsers);

// Route to get the profile of the authenticated user
router.get('/profile', authenticateUser, userController.getUserProfile);

// Route to update the profile of the authenticated user
router.put('/profile', authenticateUser, userController.updateUserProfile);


// Protected user route example
router.get('/user-protected-resource', authenticateUser, userController.getUserProtectedResource);


module.exports = router;
