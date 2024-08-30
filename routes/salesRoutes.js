// routes/salesRoutes.js
const express = require('express');
const router = express.Router();

// Sample route for sales
router.get('/', (req, res) => {
  res.status(200).json({
    message: " OK "
  });
});

module.exports = router;
