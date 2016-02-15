var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var placeController = require('./place/placeController.js');

var app = express();
mongoose.connect('mongodb://localhost/Places');

//Middleware


// Parse JSON
app.use(bodyParser.json());
// Parse forms
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

//Routes
app.get('/places/', placeController.allPlaces);
app.post('/places/', placeController.newPlace);

app.listen(8000, '127.0.0.1');

module.exports = app;

