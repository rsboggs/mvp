angular.module('app.places', [])

  .controller('PlacesController', function($scope, Places) {
    $scope.data = {};
    $scope.currentPlace = {};

    var initializePlaces = function() {
      Places.getPlaces()
        .then(function(places) {
          $scope.data.places = places.data;
        })
        .catch(function(error) {
          console.error(error);
        });
    };

    $scope.addNewPlace = function() {
      // var googleMaps = Places.calcLongLat($scope.currentPlace.address);
      // $scope.currentPlace.long = googleMaps.results[0].geometry.location.lng;
      // $scope.currentPlace.lat = googleMaps.results[0].geometry.location.lat;
      $scope.currentPlace.long = -122.419595;
      $scope.currentPlace.lat = 37.79797;
      Places.addPlace($scope.currentPlace);
    };

    $scope.increment = function() {
      //need to search for entry and increment visits
    };



    initializePlaces();
  });
