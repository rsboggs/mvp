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
      Places.addPlace($scope.currentPlace);
    };

    $scope.increment = function() {
      //need to search for entry and increment visits
    };

    initializePlaces();
  });