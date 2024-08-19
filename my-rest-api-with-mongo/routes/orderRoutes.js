const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create (POST) - Orders
router.post('/', async (req, res) => {
    const order = new Order(req.body);
    try {
        const savedOrder = await order.save();
        res.status(201).send(savedOrder);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read (GET) - Orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().lean();
        res.send(orders);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update (PUT) - Orders
router.put('/:orderId', async (req, res) => {
    try {
        const updatedOrder = await Order.findOneAndUpdate({ orderId: req.params.orderId }, req.body, { new: true, lean: true });
        if (updatedOrder) {
            res.send(updatedOrder);
        } else {
            res.status(404).send({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete (DELETE) - Orders
router.delete('/:orderId', async (req, res) => {
    try {
        const deletedOrder = await Order.findOneAndDelete({ orderId: req.params.orderId });
        if (deletedOrder) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
