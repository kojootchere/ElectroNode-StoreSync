// Import necessary modules and dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define a Sequelize model for 'Tag'
class Tag extends Model { }

// Initialize 'Tag' model with its properties and data types
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER, // Integer data type
      allowNull: false, // Cannot be null
      primaryKey: true, // Primary key
      autoIncrement: true, // Auto-increment
    },
    tag_name: {
      type: DataTypes.STRING, // String data type
      allowNull: false, // Cannot be null
    },
  },
  {
    sequelize, // Database connection
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Match table name with model name
    underscored: true, // Use snake_case for column names
    modelName: 'tag', // Model name
  }
);

// Export the 'Tag' model for use in the application
module.exports = Tag;
