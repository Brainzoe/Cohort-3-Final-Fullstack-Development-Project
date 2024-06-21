require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS package
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const foodTypeRoutes = require('./routes/foodTypeRoutes');
const orderRoutes = require('./routes/orderRoutes');
const riderRoutes = require('./routes/riderRoutes'); // Import rider routes
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();

app.use(express.json()); // Replace bodyParser.json() with express.json()

app.use(cors()); // Enable CORS for all routes

// Mount routes
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', userRoutes);
app.use('/api', foodTypeRoutes);
app.use('/api', orderRoutes);
app.use('/api', riderRoutes); // Mount rider routes
app.use('/api', analyticsRoutes);

// Handle errors (must be placed after all routes and middleware)
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Connect to MongoDB using the URI from .env
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove useCreateIndex option
})
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });


























































































// // app.js

// require('dotenv').config(); // Load environment variables from .env file

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const userRoutes = require('./routes/userRoutes');
// const cors = require('cors'); // Import CORS package
// const adminRoutes = require('./routes/adminRoutes');
// const authRoutes = require('./routes/authRoutes');
// const foodTypeRoutes = require('./routes/foodTypeRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const riderRoutes = require('./routes/riderRoutes'); // Import rider routes
// const analyticsRoutes = require('./routes/analyticsRoutes');

// const app = express();

// app.use(bodyParser.json());

// app.use(cors());

// // Mount routes
// app.use('/api', authRoutes);
// app.use('/api', adminRoutes);
// app.use('/api', userRoutes);
// app.use('/api', foodTypeRoutes);
// app.use('/api', orderRoutes);
// app.use('/api', riderRoutes); // Mount rider routes
// app.use('/api', analyticsRoutes);

// // Handle errors
// app.use((err, req, res, next) => {
//   console.error('Error:', err.stack);
//   res.status(500).json({ error: 'Internal server error' });
// });

// // Connect to MongoDB using the URI from .env
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     const PORT = process.env.PORT || 4000;
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch(error => {
//     console.error('Error connecting to MongoDB:', error);
//   });
