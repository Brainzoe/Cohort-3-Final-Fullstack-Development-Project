// controllers/analyticsController.js

const Rider = require('../models/Rider');
const User = require('../models/User');
const Order = require('../models/Order');
const FoodType = require('../models/FoodType'); // Import FoodType model

const getAnalytics = async (req, res) => {
  try {
    const riderCount = await Rider.countDocuments();
    const userCount = await User.countDocuments();
    const orderCount = await Order.countDocuments();
    const foodTypeCount = await FoodType.countDocuments(); // Count of food types

    const highestSales = await Order.findOne({}, {}, { sort: { 'totalAmount': -1 } }).select('createdAt totalAmount');

    res.json({
      riders: riderCount,
      users: userCount,
      orders: orderCount,
      foodTypes: foodTypeCount, // Include food types count in analytics
      highestSales: highestSales ? highestSales.createdAt : null,
    });
  } catch (error) {
    console.error('Error retrieving analytics data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAnalytics,
};
