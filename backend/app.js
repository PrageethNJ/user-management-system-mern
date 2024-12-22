require('dotenv').config();
const express = require('express');
const connectDB = require('./db'); // Import the db.js file

const app = express();  // create new express application

// Connect to the database
connectDB();

// Define your routes and other middleware here...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/",(req, res, next) => {
  res.send("Hello world");
});
