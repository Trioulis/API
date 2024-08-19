const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Create (POST) - Items
router.post('/', async (req, res) => {
    const item = new Item(req.body);
    try {
        const savedItem = await item.save();
        res.status(201).send(savedItem);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read (GET) - Items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find().lean();
        res.send(items);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update (PUT) - Items
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findOneAndUpdate({ id: req.params.id }, req.body, { new: true, lean: true });
        if (updatedItem) {
            res.send(updatedItem);
        } else {
            res.status(404).send({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete (DELETE) - Items
router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findOneAndDelete({ id: req.params.id });
        if (deletedItem) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
