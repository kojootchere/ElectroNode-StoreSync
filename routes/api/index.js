// Import Express and route modules
const router = require('express').Router();

// Import route modules for categories, products, and tags
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Define routes for categories, products, and tags
router.use('/categories', categoryRoutes); // Routes for categories
router.use('/products', productRoutes);     // Routes for products
router.use('/tags', tagRoutes);             // Routes for tags

// Export the router for use in the application
module.exports = router;
