const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Middleware to parse incoming URL-encoded data (like form submissions)
app.use(express.urlencoded({ extended: true }));

// route files
const userRoutes = require('./routes/userRoutes.js');
const deviceRoutes = require('./routes/deviceRoutes.js');
const salesRoutes = require('./routes/salesRoutes.js');

// Connect to Database
connectDB();

// Routes
app.use('/users', userRoutes);
app.use('/devices', deviceRoutes);
app.use('/sales', salesRoutes);

// USB detection script
require('./utils/usbDetection');

const PORT = process.env.PORT || 4545;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
