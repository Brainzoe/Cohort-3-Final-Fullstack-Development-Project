// models/Order.js
// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   foodType: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'FoodType',
//     required: true
//   },
//   quantity: {
//     type: Number,
//     required: true
//   },
//   totalPrice: {
//     type: Number,
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'completed'],
//     default: 'pending'
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Order = mongoose.model('Order', orderSchema);

// module.exports = Order;

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  foodType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodType',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

orderSchema.pre('save', async function(next) {
  try {
    // Calculate totalPrice based on quantity and foodType price
    const foodType = await mongoose.model('FoodType').findById(this.foodType);
    if (!foodType) {
      throw new Error('FoodType not found');
    }
    this.totalPrice = foodType.price * this.quantity;
    next();
  } catch (error) {
    next(error);
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

