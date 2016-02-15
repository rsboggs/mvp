var express = require('express');
var mongoose = require('mongoose');

var app = express();
mongoose.connect('mongodb://localhost/Places');

//routes
app.get('/places/', placesController.allPlaces);
app.post('/places/', placesController.newPlace);

app.listen(8000);

module.exports = app;

