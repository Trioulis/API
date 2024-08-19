const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    id: Number,
    name: String,
    quantity: Number
});

module.exports = mongoose.model('Item', itemSchema);
