const express = require('express');
const router = express.Router();
const riderController = require('../controllers/riderController');

// Route to create a new rider
router.post('/riders', riderController.createRider);

// Route to get all riders
router.get('/riders', riderController.getAllRiders);

// Route to get a rider by ID
router.get('/riders/:id', riderController.getRiderById);

// Route to update a rider by ID
router.put('/riders/:id', riderController.updateRiderById);

// Route to delete a rider by ID
router.delete('/riders/:id', riderController.deleteRiderById);

module.exports = router;
