const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection'); // Assuming your sequelize configuration is in a file named connection.js under the config directory.

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {  // force: false means we're not going to drop the DB every time we restart the app.
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
