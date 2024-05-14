// // routes/foodTypeRoutes.js
// const express = require('express');
// const router = express.Router();
// const foodTypeController = require('../controllers/foodTypeController');

// router.post('/foodTypes', foodTypeController.createFoodType);
// // Define other routes for updating, deleting, and fetching food types

// module.exports = router;

// routes/foodTypeRoutes.js
const express = require('express');
const router = express.Router();
const foodTypeController = require('../controllers/foodTypeController');
const { authenticateUser, authorizeAdmin } = require('../middleware/authMiddleware');

// Create a new food type
router.post('/foodTypes', authenticateUser, authorizeAdmin, foodTypeController.createFoodType);

// Get a food type by ID
router.get('/foodTypes/:id', foodTypeController.getFoodTypeById);

// Update a food type by ID
router.put('/foodTypes/:id', authenticateUser, authorizeAdmin, foodTypeController.updateFoodType);

// Delete a food type by ID
router.delete('/foodTypes/:id', authenticateUser, authorizeAdmin, foodTypeController.deleteFoodType);

// Get a list of all food types
router.get('/foodTypes', foodTypeController.listFoodTypes);

module.exports = router;
