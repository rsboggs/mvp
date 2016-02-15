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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// app.use(express.static(__dirname + '/public'));

//Routes
// app.get('/', function(req, res) {
//   res.render('index.html');
// });

app.get('/places/', placeController.allPlaces);
app.post('/places/', placeController.newPlace);

app.listen(8000);

module.exports = app;

