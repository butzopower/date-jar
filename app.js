angular.module("dateJar", ["firebase"]);
angular.module("dateJar").controller("DateController", ["$scope", "$firebase", function($scope, $firebase) {
    var firebaseRef = new Firebase("https://fiery-fire-8662.firebaseio.com/date-jar");
    $scope.dates = $firebase(firebaseRef);

    this.addADate = function(newDateText) {
      $scope.dates.$add({title: newDateText, done: false});
      $scope.newDateText = "";
    };
}]);
