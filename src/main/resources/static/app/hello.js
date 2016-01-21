angular.module('hello', [])
  .controller('HelloController', function HelloController($scope, $http) {
    $http.get('/hello/').success(function(data) {
      $scope.greeting = data;
    });
  });