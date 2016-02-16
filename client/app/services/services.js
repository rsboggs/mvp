angular.module('app.services', [])
  
  .factory('Places', function($http, $q) {
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

    var updatePlace = function(place) {
      return $http({
        method: 'POST',
        url: '/votes',
        data: place
      });
    };

    var calcLongLat = function(address) {
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address);
      return $http({
        method: 'GET',
        url: url
      });
    };

    return {
      getPlaces: getPlaces,
      addPlace: addPlace,
      calcLongLat: calcLongLat,
      updatePlace: updatePlace
    };

  });