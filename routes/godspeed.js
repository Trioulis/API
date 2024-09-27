const express = require('express');
const router = express.Router();
const Godspeed = require('../models/Godspeed');

// Create a new godspeed (POST)
router.post('/', async (req, res) => {
  try {
    const newGodspeed = new Godspeed(req.body);
    const savedGodspeed = await newGodspeed.save();
    res.status(201).json(savedGodspeed);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all godspeeds (GET)
router.get('/', async (req, res) => {
  try {
    const godspeeds = await Godspeed.find();
    res.json(godspeeds);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single godspeed by ID (GET)
router.get('/:id', async (req, res) => {
  try {
    const godspeed = await Godspeed.findById(req.params.id);
    if (godspeed == null) {
      return res.status(404).json({ message: 'Godspeed not found' });
    }
    res.json(godspeed);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a godspeed by ID (PUT)
router.put('/:id', async (req, res) => {
  try {
    const updatedGodspeed = await Godspeed.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedGodspeed);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a godspeed by ID (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const deletedGodspeed = await Godspeed.findByIdAndDelete(req.params.id);
    if (deletedGodspeed == null) {
      return res.status(404).json({ message: 'Godspeed not found' });
    }
    res.json({ message: 'Godspeed deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
