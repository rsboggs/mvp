var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
  name: String,
  address: String,
  description: String,
  url: String
});

module.exports = mongoose.model('Place', PlaceSchema);