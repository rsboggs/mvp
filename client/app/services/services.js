angular.module('app.services', [])
  
  .factory('Places', function($http) {
    var getPlaces = function() {
      return $http({
        method: 'GET',
        url: '/places'
      });
    };

    var addPlace = function(place) {
      return $http({
        method: 'POST',
        url: '/places',
        data: place
      });
    };

    return {
      getPlaces: getPlaces,
      addPlace: addPlace
    };

  });