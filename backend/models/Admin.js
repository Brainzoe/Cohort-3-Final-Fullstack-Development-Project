// models/Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:{type: String, required:true},
  password: { type: String, required: true },
//   isAdmin: { type: Boolean, default: true } // Indicates if the user is an admin
  role:     {type: String, required: true}
});

module.exports = mongoose.model('Admin', adminSchema);