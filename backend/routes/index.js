const express = require('express');
const router = express.Router();
const { forwardAuthenticated } = require('../config/auth');

// Welcome API
router.get('/', forwardAuthenticated, (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

module.exports = router;