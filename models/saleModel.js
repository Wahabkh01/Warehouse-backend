// models/saleModel.js
const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true },
  customerName: { type: String, required: true },
  salePrice: { type: Number, required: true },
  saleDate: { type: Date, default: Date.now },
}, { timestamps: true });

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;
