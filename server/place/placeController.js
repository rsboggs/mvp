var Place = require('./placeModel.js');
Q = require('q');

//Promisfy mongoose methods
var findAllPlaces = Q.nbind(Place.find, Place);
var createPlace = Q.nbind(Place.create, Place);
var findPlace = Q.nbind(Place.findOne, Place);

module.exports = {
  allPlaces: function(req, res, next) {
    findAllPlaces({})
      .then(function(places) {
        res.json(places);
      })
      .fail(function(error) {
        next(error);
      });
  },

  newPlace: function(req, res, next) {
    var name = req.body.name;
    var address = req.body.address;
    var description = req.body.description;
    var url = req.body.url;
    findPlace({url: url})
      .then(function(match) {
        if (match) {
          res.send(match);
        } else {
          return true;
        }
      })
      .then(function(needCreate) {
        if (needCreate) {
          var newPlace = {
            name: name,
            address: address,
            description: description,
            url: url,
            votes: 0
          };
          console.log('newPlace', newPlace);
          return createPlace(newPlace);
        }
      })
      .then(function(createdPlace) {
        if(createdPlace) {
          res.json(createPlace);
        }
      })
      .fail(function(error) {
        next(error);
      });
  }

};
