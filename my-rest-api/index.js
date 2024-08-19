const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

let items = [];

// Create (POST)
app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).send(item);
});

// Read (GET)
app.get('/items', (req, res) => {
    res.send(items);
});

// Update (PUT)
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
        items[itemIndex] = req.body;
        res.send(items[itemIndex]);
    } else {
        res.status(404).send({ message: 'Item not found' });
    }
});

// Delete (DELETE)
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send({ message: 'Item not found' });
    }
});
