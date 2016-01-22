angular.module('bundesliga-dojo.controllers', [])
  .controller('BundesligaTableController', function BundesligaTableController($scope, $http) {
    $http.get('/standings/').success(function(data) {
      $scope.standings = data;
    });
  });