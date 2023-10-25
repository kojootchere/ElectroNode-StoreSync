// Import the 'Category' model from '../models'
const { Category } = require('../models');

// Define an array of category data
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Define a function 'seedCategories' to bulk create categories using the 'Category' model
const seedCategories = () => Category.bulkCreate(categoryData);

// Export the 'seedCategories' function for use in the application
module.exports = seedCategories;
