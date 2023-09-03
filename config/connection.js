require('dotenv').config();

const Sequelize = require('sequelize');
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD)

const mysql = require('mysql2');
let sequelize;

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  
  console.log('Connected to MySQL');

  connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`, (error, results) => {
    if (error) {
      console.error('Error creating/checking database: ', error);
      return;
    }

    console.info("Database created or successfully checked");
    
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: '127.0.0.1',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

    sequelize.authenticate().then(() => {
      console.log('Connection to Sequelize established successfully.');
    }).catch((error) => {
      console.error('Unable to connect to the Sequelize database: ', error);
    });
  });
});

module.exports = sequelize;
