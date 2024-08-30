const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

// Route to get all users or a default message
router.get('/', (req, res) => {
  res.send('User route');
});

// Route to add a new user
router.post('/add-user', userController.addUser);

module.exports = router;
