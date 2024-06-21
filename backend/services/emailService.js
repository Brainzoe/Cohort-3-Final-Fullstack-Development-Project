// controllers/orderController.js
const Order = require('../models/Order');
const emailService = require('../services/emailService');

exports.createOrder = async (req, res) => {
  try {
    // Create order logic here...
    // Send order confirmation email to the user
    const userEmail = req.user.email; // Assuming user's email is stored in the JWT token
    const userSubject = 'Order Confirmation';
    const userText = 'Your order has been successfully placed. Thank you!';
    await emailService.sendEmail(userEmail, userSubject, userText);

    // Send notification email to the rider
    const riderEmail = 'rider@example.com'; // Replace with actual email of the rider
    const riderSubject = 'New Order Alert';
    const riderText = 'A new order has been placed and assigned to you.';
    await emailService.sendEmail(riderEmail, riderSubject, riderText);

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
