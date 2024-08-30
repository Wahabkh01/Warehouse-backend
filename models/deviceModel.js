// /models/deviceModel.js
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  model: { type: String, required: true, trim: true },
  color: { type: String, required: true },
  storage: { type: String, required: true },
  imei: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: { type: String },
  barcode: { type: String, required: true },  // Store barcode or placeholder
}, { timestamps: true });

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
