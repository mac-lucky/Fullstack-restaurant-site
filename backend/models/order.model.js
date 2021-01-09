const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  username: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: Date, required: true },
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;