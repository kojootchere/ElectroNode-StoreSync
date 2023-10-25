// Import Express and other necessary modules
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// Create an Express application
const app = express();

// Define the port to listen on, with a fallback to port 3001
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the defined routes
app.use(routes);

// Sync Sequelize models to the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
