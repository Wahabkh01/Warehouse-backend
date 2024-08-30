// /controllers/deviceController.js
const Device = require('../models/deviceModel.js');

// Add Device
exports.addDevice = async (req, res) => {
  try {
    const { barcode, model, color, storage, imei, price, description } = req.body;

    let deviceData = {
      barcode,
      model,
      color,
      storage,
      imei,
      price,
      description
    };

    if (!barcode) {
      deviceData.barcode = generateDefaultBarcode(deviceData);
    }

    const newDevice = new Device(deviceData);
    await newDevice.save();

    res.status(201).json({ message: 'Device saved successfully', data: newDevice });
  } catch (error) {
    res.status(500).json({ message: 'Error saving device', error });
  }
};

// Show Devices
exports.showDevices = async (req, res) => {
  try {
    const devices = await Device.find();

    let html = `
      <h1>Device List</h1>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>Model</th>
          <th>Color</th>
          <th>Storage</th>
          <th>IMEI</th>
          <th>Price</th>
          <th>Description</th>
          <th>Barcode</th>
        </tr>
    `;

    devices.forEach(device => {
      html += `
        <tr>
          <td>${device.model}</td>
          <td>${device.color}</td>
          <td>${device.storage}</td>
          <td>${device.imei}</td>
          <td>${device.price}</td>
          <td>${device.description || 'N/A'}</td>
          <td>${device.barcode}</td>
        </tr>
      `;
    });

    html += `</table>`;
    res.send(html);

  } catch (error) {
    res.status(500).json({ message: 'Error fetching devices', error });
  }
};

// Function to generate a placeholder barcode
function generateDefaultBarcode(deviceData) {
  return `barcode-${deviceData.imei}-${Date.now()}`;
}
