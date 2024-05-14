// models/FoodType.js
const mongoose = require('mongoose');

const foodTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description:{type: String},
  price: {type: Number}
  // Add other fields as needed
});

module.exports = mongoose.model('FoodType', foodTypeSchema);
