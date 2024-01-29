const express = require('express');
const router = express.Router();

// Sample GET route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to your MERN stack API!' });
});

module.exports = router;
