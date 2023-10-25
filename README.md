# ElectroNode-StoreSync

## Description

In the vast domain of e-commerce, particularly in the electronics sector, the ability to buy and sell electronic products online plays a pivotal role. Recent data from 2021 highlights that the industry, only in the U.S., raked in a whopping US$2.54 trillion. This is courtesy of the United Nations Conference on Trade and Development. Platforms like Shopify and WooCommerce have paved the way for businesses to thrive online. Recognizing this prevalence, it's crucial for developers to be well-acquainted with the core architecture of e-commerce platforms.

ElectroNode-StoreSync is geared towards providing developers the backend capabilities for such e-commerce sites. By leveraging an Express.js API, this tool uses Sequelize to bridge communications with a MySQL database.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
- [Walkthrough](#walkthrough)

## Installation
1. Initialize Database: Use the MySQL shell and execute source schema.sql to set up the required database structure.
2. Seed the Database: In your terminal, execute npm run seed to populate the database with sample data.
3. Start the Server: To activate the server, enter `npm start` in your terminal.

## Usage
With the server active, you can communicate with the database using HTTP requests via tools like Insomnia. For every model — Categories, Products, and Tags — the application facilitates:

1. Retrieve All Entries: Fetch all records for a specific model.
2. Retrieve a Single Entry: Fetch an individual record by including its ID in the URL.
3. Add a New Entry: Create a new record by supplying the necessary data in the request body.
4. Update an Entry: Modify an existing record by offering the relevant data in the request body.
5. Delete an Entry: Erase a particular record by incorporating its ID in the URL.

For a detailed walkthrough, please visit the link in the [Walkthrough](#walkthrough) section.

## License
This project is licensed under the MIT license.

## Contributing
N/A

## Questions
For any questions, please contact me at [https://github.com/kojootchere](https://github.com/kojootchere) or [email me](mailto:kojootchere@gmail.com).

## Walkthrough

Link to Walkthrough Video: [ElectroNode-StoreSync Walkthrough](https://drive.google.com/file/d/1spRQYdpsGWnVyLZhgwSMdY8cg7Opqqyi/view?usp=share_link)
