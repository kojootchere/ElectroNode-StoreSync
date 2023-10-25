// Load environment variables from a .env file
require('dotenv').config();

// Import Sequelize
const Sequelize = require('sequelize');

// Create a Sequelize instance with the appropriate configuration
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // Use the JAWSDB_URL environment variable for production (e.g., Heroku)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost', // Database host (assuming it's on the local machine)
      dialect: 'mysql', // Database dialect (MySQL in this case)
      dialectOptions: {
        decimalNumbers: true, // Enable decimal numbers support
      },
    });

// Export the sequelize instance for use in the application
module.exports = sequelize;
