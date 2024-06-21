// models/Rider.js
// const mongoose = require('mongoose');

// const riderSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   phone: { type: String, required: true },
//   // Add other fields as needed
// });

// module.exports = mongoose.model('Rider', riderSchema);
const mongoose = require('mongoose');

const riderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  currentLocation: { type: String, required: true },
  availability: { type: Boolean, default: true }, // Can be used to mark rider as available or unavailable
  // Add any other relevant fields
});

const Rider = mongoose.model('Rider', riderSchema);

module.exports = Rider;
