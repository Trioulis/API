const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Import the routes
const itemRoutes = require('./routes/items');
const userRoutes = require('./routes/users');
const godspeedRoutes = require('./routes/godspeeds');

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/HeroesDB') // Connecting to local MongoDB and specifying the HeroesDB database
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => console.log(err));

// Use the item routes
app.use('/items', itemRoutes);
app.use('/users', userRoutes);
app.use('/godspeeds', godspeedRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Status endpoint to check if DB is running
app.get("/status", (req, res) => {
  const status = {
     "Status": "HeroesDB is running"
  };
  res.send(status);
});
