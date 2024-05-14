// models/Rider.js
const mongoose = require('mongoose');

const riderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  // Add other fields as needed
});

module.exports = mongoose.model('Rider', riderSchema);
