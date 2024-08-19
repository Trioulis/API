const express = require('express');
const router = express.Router();
const Godspeed = require('../models/Godspeed');

// Create (POST) - Godspeed
router.post('/', async (req, res) => {
    const godspeed = new Godspeed(req.body);
    try {
        const savedGodspeed = await godspeed.save();
        res.status(201).send(savedGodspeed);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read (GET) - Godspeed
router.get('/', async (req, res) => {
    try {
        const godspeeds = await Godspeed.find().lean();
        res.send(godspeeds);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update (PUT) - Godspeed
router.put('/:_id', async (req, res) => {
    try {
        const updatedGodspeed = await Godspeed.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, lean: true });
        if (updatedGodspeed) {
            res.send(updatedGodspeed);
        } else {
            res.status(404).send({ message: 'Godspeed not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete (DELETE) - Godspeed
router.delete('/:_id', async (req, res) => {
    try {
        const deletedGodspeed = await Godspeed.findOneAndDelete({ _id: req.params._id });
        if (deletedGodspeed) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Godspeed not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
