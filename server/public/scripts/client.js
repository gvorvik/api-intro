console.log('clientjs sourced');

var app = angular.module('APIApp', []);

app.controller('APIAppController', ['$http', function ($http) {
    console.log('API Controller loaded');

    var self = this;

    self.message = "What's up Greg?";

    $http({
        method: 'GET',
        url: 'https://swapi.co/api/starships/?search=falcon'
    })
    .then(function(response) {
        console.log('SWAPI response', response.data);
    })
    .catch(function(error) {
        console.log('The force was not with us', error);
    });


}]);