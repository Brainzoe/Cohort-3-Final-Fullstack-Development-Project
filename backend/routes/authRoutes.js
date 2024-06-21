// backend/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
// const adminController =require('../controllers/adminController')

// // Admin login
// router.post('/admin/login', adminController.adminLogin);


// User signup
router.post('/signup', authController.signup);

// User login
router.post('/login', authController.login);

module.exports = router;
