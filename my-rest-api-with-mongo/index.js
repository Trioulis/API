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

// Define a schema for the items
const itemSchema = new mongoose.Schema({
    id: Number,
    name: String,
    quantity: Number
});

// Create a model for the items
const Item = mongoose.model('Item', itemSchema);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Create (POST)
app.post('/items', async (req, res) => {
    const item = new Item(req.body);
    try {
        const savedItem = await item.save();
        res.status(201).send(savedItem);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read (GET)
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.send(items);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update (PUT)
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

// Delete (DELETE)
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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
