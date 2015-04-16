var commitApp = angular.module('commitApp', []);

commitApp.controller('CommitCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('/myCommits').success(function(data) {
    $scope.commits = JSON.parse(data.text)
    console.log($scope.commits);
  })

}]);
