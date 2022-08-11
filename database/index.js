const mongoose = require('mongoose');

const { Schema } = mongoose;

const userListSchema = new Schema({
  id: String,
  url: String,
  rating: Number,
  review_count: Number,
  price: String,
  name: String,
  address_1: String,
  address_2: String,
  phone: String,
  time: String,
  hour: Number,
  minutes: Number,
});

const userList = mongoose.model('userList', userListSchema);

module.exports = userList;
