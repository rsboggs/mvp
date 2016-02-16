var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
  name: String,
  address: String,
  description: String,
  url: String,
  votes: Number
});

module.exports = mongoose.model('Place', PlaceSchema);