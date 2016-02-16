var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
  name: String,
  address: String,
  description: String,
  long: Number,
  lat: Number,
  url: String,
  votes: Number
});

module.exports = mongoose.model('Place', PlaceSchema);