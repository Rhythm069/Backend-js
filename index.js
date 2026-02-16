console.log("Hello, World!");

const express = require('express');
const connectToDatabase = require('./db/db');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
connectToDatabase();

app.get('/', (req, res) => {
  res.send('Rhythm  ');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
