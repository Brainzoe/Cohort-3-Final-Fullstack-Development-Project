// app.js

require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const foodTypeRoutes = require('./routes/foodTypeRoutes');
const orderRoutes = require('./routes/orderRoutes');
const errorHandler = require('./middleware/authMiddleware').errorHandler;

const app = express();

app.use(bodyParser.json());

app.use('/api', adminRoutes);
app.use('/api', userRoutes);
app.use('/api', foodTypeRoutes);
app.use('/api', orderRoutes);

app.use(errorHandler);

// Connect to MongoDB using the URI from .env
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
