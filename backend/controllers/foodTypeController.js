// controllers/foodTypeController.js
// Implementation for creating a new food type
// Implement other CRUD operations for food types


// controllers/foodTypeController.js
const FoodType = require('../models/FoodType');

// controllers/foodTypeController.js

exports.createFoodType = async (req, res) => {
    try {
      const { name, description, price } = req.body;
      const newFoodType = new FoodType({ name });
      
      // Optional fields: description and price
      if (description) newFoodType.description = description;
      if (price) newFoodType.price = price;
      
      await newFoodType.save();
      res.status(201).json(newFoodType);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.getFoodTypeById = async (req, res) => {
  try {
    const foodTypeId = req.params.id;
    const foodType = await FoodType.findById(foodTypeId);
    if (!foodType) {
      return res.status(404).json({ error: 'Food type not found' });
    }
    res.json(foodType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateFoodType = async (req, res) => {
  try {
    const foodTypeId = req.params.id;
    const updates = req.body;
    const updatedFoodType = await FoodType.findByIdAndUpdate(foodTypeId, updates, { new: true });
    if (!updatedFoodType) {
      return res.status(404).json({ error: 'Food type not found' });
    }
    res.json(updatedFoodType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteFoodType = async (req, res) => {
  try {
    const foodTypeId = req.params.id;
    const deletedFoodType = await FoodType.findByIdAndDelete(foodTypeId);
    if (!deletedFoodType) {
      return res.status(404).json({ error: 'Food type not found' });
    }
    res.json({ message: 'Food type deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listFoodTypes = async (req, res) => {
  try {
    const foodTypes = await FoodType.find();
    res.json(foodTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

