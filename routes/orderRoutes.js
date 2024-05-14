// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { authenticateUser, authorizeAdmin } = require('../middleware/authMiddleware');

// Create a new order
router.post('/orders', authenticateUser, orderController.createOrder);

// Get an order by ID
router.get('/orders/:id', orderController.getOrderById);

// Update an order by ID
router.put('/orders/:id', authenticateUser, orderController.updateOrder);

// Delete an order by ID
router.delete('/orders/:id', authenticateUser, orderController.deleteOrder);

// Get a list of all orders
router.get('/orders', authenticateUser, orderController.listOrders);

module.exports = router;
