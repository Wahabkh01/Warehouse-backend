const User = require('../models/userModel.js');

// Controller function to add a new user
exports.addUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Create a new User instance
    const newUser = new User({ name, email, password, role });

    // Save the user to the database
    await newUser.save();

    // Return a success response
    res.status(201).json({ message: 'User added successfully', data: newUser });
  } catch (error) {
    // Handle errors (e.g., validation errors, unique constraint errors)
    res.status(500).json({ message: 'Error adding user', error });
  }
};
