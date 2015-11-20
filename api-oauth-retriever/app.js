(function() {
  var app = angular.module('api-oauth-retriever', []);
})();

angular.module('api-oauth-retriever').controller('PageController', ['$scope', '$http', function($scope, $http) {

  $scope.clientId = '';
  $scope.clientSecret = '';

  // retrieve function
  $scope.retrieveToken = function() {
		$scope.token = '';
		$scope.error = '';
    var params = 'client_id=' + $scope.clientId + '&client_secret=' + $scope.clientSecret + '&grant_type=client_credentials';
    $http.post('https://www.mapapropapp.com/api/action/oauth2-v1/authorize').success(function(data) {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).success(function(data) {
      $scope.token = data.access_token;
    }).error(function(data) {
      $scope.error = data.description;
    });
  }
}]);
