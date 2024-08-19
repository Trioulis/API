const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');
const orderRoutes = require('./routes/orderRoutes');
const godspeedRoutes = require('./routes/godspeedRoutes');

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => {
      console.log('Connected to MongoDB');
  })
  .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
  });

app.use('/items', itemRoutes);
app.use('/orders', orderRoutes);
app.use('/godspeeds', godspeedRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong!', error: err.message });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
