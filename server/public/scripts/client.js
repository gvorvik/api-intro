console.log('clientjs sourced');

var app = angular.module('APIApp', []);

app.controller('APIAppController', ['$http', function($http) {
    console.log('API Controller loaded');
    
    var self = this;
}]);