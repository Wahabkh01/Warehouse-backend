const usbDetect = require('usb-detection');
const axios = require('axios'); // To send HTTP requests to your backend API

// Start monitoring for USB devices
usbDetect.startMonitoring();

// Event listener for USB device added
usbDetect.on('add', function (device) {
  console.log('USB Device connected:', device);

  axios.post('http://localhost:4545/devices/add-device', {
    model: device.deviceName || 'Unknown Model',  // Placeholder or actual data if available
    color: 'Unknown Color', // Provide actual value if available
    storage: 'Unknown Storage', // Provide actual value if available
    imei: device.serialNumber || 'Unknown IMEI', // Placeholder or actual data if available
    price: 100, // Provide actual value if available
    description: 'USB device connected', // Optional description
    barcode: device.productId ? `BAR-${device.productId}` : 'Unknown Barcode' // Example barcode creation
  })
  .then(response => console.log('Device data saved:', response.data))
  .catch(error => console.error('Error saving device data:', error.response?.data || error.message));
});

// Event listener for USB device removed
usbDetect.on('remove', function (device) {
  console.log('USB Device removed:', device);
});

// Stop monitoring when needed
// usbDetect.stopMonitoring();
