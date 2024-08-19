const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => {
      console.log('Connected to MongoDB');
  })
  .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
  });

// Define a schema for the items collection
const itemSchema = new mongoose.Schema({
    id: Number,
    name: String,
    quantity: Number
});

// Create a model for the items collection
const Item = mongoose.model('Item', itemSchema);

// Define a schema for the orders collection
const orderSchema = new mongoose.Schema({
    orderId: Number,
    item: String,
    quantity: Number,
    status: String
});

// Create a model for the orders collection
const Order = mongoose.model('Order', orderSchema);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// CRUD operations for the items collection

// Create (POST) - Items
app.post('/items', async (req, res) => {
    const item = new Item(req.body);
    try {
        const savedItem = await item.save();
        res.status(201).send(savedItem);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read (GET) - Items
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.send(items);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update (PUT) - Items
app.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
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
app.delete('/items/:id', async (req, res) => {
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

// CRUD operations for the orders collection

// Create (POST) - Orders
app.post('/orders', async (req, res) => {
    const order = new Order(req.body);
    try {
        const savedOrder = await order.save();
        res.status(201).send(savedOrder);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read (GET) - Orders
app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.send(orders);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update (PUT) - Orders
app.put('/orders/:orderId', async (req, res) => {
    try {
        const updatedOrder = await Order.findOneAndUpdate({ orderId: req.params.orderId }, req.body, { new: true });
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
app.delete('/orders/:orderId', async (req, res) => {
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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});