// routes/analyticsRoutes.js
// const express = require('express');
// const router = express.Router();
// const { isLoggedIn } = require('../middleware/authMiddleware');
// const User = require('../models/User');

// // Get analytics data
// router.get('/analytics', isLoggedIn, async (req, res) => {
//     try {
//         // Fetch total number of users logged in
//         const userCount = await User.countDocuments();
        
//         // Fetch last login time (assuming you have a 'lastLoggedIn' field in your user model)
//         const lastLoggedIn = await User.findOne().sort({ lastLoggedIn: -1 }).select('lastLoggedIn');
        
//         res.json({ userCount, lastLoggedIn });
//     } catch (error) {
//         console.error('Failed to fetch analytics:', error);
//         res.status(500).json({ error: 'Failed to fetch analytics' });
//     }
// });

// module.exports = router;


// routes/analyticsRoutes.js

const express = require('express');
const router = express.Router();
const { authenticateUser, authorizeAdmin } = require('../middleware/authMiddleware');
const analyticsController = require('../controllers/analyticsController');

// Get analytics data
router.get('/analytics', authenticateUser, authorizeAdmin, analyticsController.getAnalytics);

module.exports = router;

