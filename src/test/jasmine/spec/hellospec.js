describe("hello", function () {
  var $http = function (data) {
    return {
      "get": function (name) {
        if (name == '/hello/')
          return {
            "success": function (callback) {
              callback(data);
            }
          };
      }
    };
  };

  beforeEach(module('hello'));

  var $controller;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('should call rest service and request greeting', function () {
    var data = {"id": "1", "content": "Hello world!"};
    var $scope = {};
    $controller('HelloController', {$scope: $scope, $http: $http(data)});
    expect($scope.greeting.id).toEqual('1');
    expect($scope.greeting.content).toEqual('Hello world!');
  });
});