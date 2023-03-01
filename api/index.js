const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const app = express();

app.get('/test', (req, res) => {
  res.json('Hello World!');
});

app.post('/register', (req, res) => {

})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

