const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const fruits = require('./routes/fruits');
app.use('/api/fruits', fruits);

module.exports = app;