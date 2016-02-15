angular.module('app.places', [])

  .controller('PlacesController', function($scope, Places) {
    $scope.data = {};

    var initializePlaces = function() {
      Places.getPlaces()
        .then(function(places) {
          $scope.data.places = places;
        })
        .catch(function(error) {
          console.error(error);
        });
    };

    initializePlaces();
  });