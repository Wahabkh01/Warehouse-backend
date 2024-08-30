// /routes/deviceRoutes.js
const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController.js');

// Route to add a device
router.post('/add-device', deviceController.addDevice);

// Route to show all devices
router.get('/show-device', deviceController.showDevices);

module.exports = router;
