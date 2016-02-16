angular.module('app.places', [])

  .controller('PlacesController', function($scope, Places) {
    $scope.data = {};

    $scope.currentPlace = {};

    var updateMap = function() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: new google.maps.LatLng(37.783697, -122.408966),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var marker;
      var infowindow = new google.maps.InfoWindow();

      for (var i = 0; i < $scope.data.places.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng($scope.data.places[i].lat, $scope.data.places[i].long),
          map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent($scope.data.places[i].name);
            infowindow.open(map, marker);
          };
        })(marker, i));
      }

      var numPlaces = [$scope.data.places.length - 1];
      map.setCenter(new google.maps.LatLng($scope.data.places[numPlaces].lat, 
        $scope.data.places[numPlaces].long));
      
    };

    var initializePlaces = function() {
      Places.getPlaces()
        .then(function(places) {
          $scope.data.places = places.data;
          updateMap();
        })
        .catch(function(error) {
          console.error(error);
        });
    };


    $scope.addNewPlace = function() {
      Places.calcLongLat($scope.currentPlace.address)
        .then(function(location) {
          var googleMaps = location.data;

          $scope.currentPlace.long = googleMaps.results[0].geometry.location.lng;
          $scope.currentPlace.lat = googleMaps.results[0].geometry.location.lat;

          Places.addPlace($scope.currentPlace)
          .then(function() {
            initializePlaces();
            $scope.currentPlace.name = '';
            $scope.currentPlace.address = '';
            $scope.currentPlace.description = '';
            $scope.currentPlace.url = '';
          })
          .catch(function(error) {
            console.error(error);
          });
        });
    };

    $scope.increment = function() {
      //need to search for entry and increment visits
    };

    initializePlaces();
  });
