// Import the 'Tag' model from '../models'
const { Tag } = require('../models');

// Define an array of tag data
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// Define a function 'seedTags' to bulk create tags using the 'Tag' model
const seedTags = () => Tag.bulkCreate(tagData);

// Export the 'seedTags' function for use in the application
module.exports = seedTags;
