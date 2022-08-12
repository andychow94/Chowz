const express = require('express');
const path = require('path');
const axios = require('axios');
const router = require('./routes');
const db = require('../database/index');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
