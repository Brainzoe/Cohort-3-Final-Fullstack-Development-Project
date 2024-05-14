// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');


router.post('/admins', adminController.createAdmin);
// Other admin routes can be defined here


// Admin login
router.post('/admin/login', authController.adminLogin);
module.exports = router;
