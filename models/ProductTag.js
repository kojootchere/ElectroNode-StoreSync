// Import necessary modules and dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define a Sequelize model for 'ProductTag'
class ProductTag extends Model { }

// Initialize 'ProductTag' model with its properties and data types
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER, // Integer data type
      allowNull: false, // Cannot be null
      primaryKey: true, // Primary key
      autoIncrement: true, // Auto-increment
    },
    product_id: {
      type: DataTypes.INTEGER, // Integer data type
      references: {
        model: 'product', // References the 'product' model
        key: 'id', // Using the 'id' field as a reference
      }
    },
    tag_id: {
      type: DataTypes.INTEGER, // Integer data type
      references: {
        model: 'tag', // References the 'tag' model
        key: 'id', // Using the 'id' field as a reference
      }
    }
  },
  {
    sequelize, // Database connection
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Match table name with model name
    underscored: true, // Use snake_case for column names
    modelName: 'product_tag', // Model name
  }
);

// Export the 'ProductTag' model for use in the application
module.exports = ProductTag;
