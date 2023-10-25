// Import required modules and dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define a Sequelize model for 'Category'
class Category extends Model { }

// Initialize 'Category' model with its properties and data types
Category.init(
  {
    id: {
      type: DataTypes.INTEGER, // Integer data type
      allowNull: false, // Cannot be null
      primaryKey: true, // Primary key
      autoIncrement: true, // Auto-increment
    },
    category_name: {
      type: DataTypes.STRING, // String data type
      allowNull: false, // Cannot be null
    },
  },
  {
    sequelize, // Database connection
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Match table name with model name
    underscored: true, // Use snake_case for column names
    modelName: 'category', // Model name
  }
);

// Export the 'Category' model for use in the application
module.exports = Category;
