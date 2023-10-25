// Import Express and route modules
const router = require('express').Router();

// Import API routes from 'api.js'
const apiRoutes = require('./api');

// Use '/api' as the base route for all API routes
router.use('/api', apiRoutes);

// Define a fallback route for handling incorrect routes
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>"); // Respond with a "Wrong Route" message
});

// Export the router for use in the application
module.exports = router;
