describe("BundesligaTableController", function () {
  var $http = function (data) {
    return {
      "get": function (name) {
        if (name == '/standings/')
          return {
            "success": function (callback) {
              callback(data);
            }
          };
      }
    };
  };

  beforeEach(module('bundesliga-dojo'));

  var $controller;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('should call rest service and request greeting', function () {
    var data = [{"name": "Bayern München", "scored": '35', "allowed":'30', "difference":"+5", "points": '25'}];
    var $scope = {};
    $controller('BundesligaTableController', {$scope: $scope, $http: $http(data)});
    expect($scope.standings.length).toEqual(1);
    expect($scope.standings[0].name).toEqual('Bayern München');
    expect($scope.standings[0].scored).toEqual('35');
    expect($scope.standings[0].allowed).toEqual('30');
    expect($scope.standings[0].difference).toEqual('+5');
    expect($scope.standings[0].points).toEqual('25');
  });
});