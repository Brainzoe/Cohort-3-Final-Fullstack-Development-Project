const Rider = require('../models/Rider');

// Method to create a new rider
exports.createRider = async (req, res) => {
  try {
    const { name, contactNumber, currentLocation } = req.body;
    const newRider = new Rider({ name, contactNumber, currentLocation });
    await newRider.save();
    res.status(201).json(newRider);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Other methods for updating, deleting, and fetching rider information can be added here

// Method to get all riders
exports.getAllRiders = async (req, res) => {
    try {
      const riders = await Rider.find();
      res.status(200).json(riders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Method to get a single rider by ID
  exports.getRiderById = async (req, res) => {
    try {
      const rider = await Rider.findById(req.params.id);
      if (!rider) {
        return res.status(404).json({ error: 'Rider not found' });
      }
      res.status(200).json(rider);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Method to update a rider by ID
  exports.updateRiderById = async (req, res) => {
    try {
      const { name, contactNumber, currentLocation } = req.body;
      const rider = await Rider.findByIdAndUpdate(
        req.params.id,
        { name, contactNumber, currentLocation },
        { new: true }
      );
      if (!rider) {
        return res.status(404).json({ error: 'Rider not found' });
      }
      res.status(200).json(rider);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Method to delete a rider by ID
  exports.deleteRiderById = async (req, res) => {
    try {
      const rider = await Rider.findByIdAndDelete(req.params.id);
      if (!rider) {
        return res.status(404).json({ error: 'Rider not found' });
      }
      res.status(204).send(); // No content to send
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  