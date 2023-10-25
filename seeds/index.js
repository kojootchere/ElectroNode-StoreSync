// Import functions to seed categories, products, tags, and product tags
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

// Import Sequelize connection
const sequelize = require('../config/connection');

// Define an asynchronous function 'seedAll' to seed the database
const seedAll = async () => {
  // Synchronize the database and force re-creation (clear existing data)
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // Seed categories and log a success message
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  // Seed products and log a success message
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  // Seed tags and log a success message
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  // Seed product tags and log a success message
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  // Exit the process with a success code (0)
  process.exit(0);
};

// Call the 'seedAll' function to start seeding the database
seedAll();
