const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/userList')
  .then((connection) => {
    console.log('Successfully connected to Mongo');
  })
  .catch((err) => {
    console.log('Unable to connect:', err);
  });

module.exports = db;
