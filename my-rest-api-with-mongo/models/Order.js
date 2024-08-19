const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: Number,
    item: String,
    quantity: Number,
    status: String
});

module.exports = mongoose.model('Order', orderSchema);
