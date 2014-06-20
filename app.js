angular.module("dateJar", ["firebase"]);
angular.module("dateJar").controller("DateController", ["$scope", "$firebase", function ($scope, $firebase) {
  var firebaseRef = new Firebase("https://fiery-fire-8662.firebaseio.com/dates");
  var datesService = $firebase(firebaseRef);
  datesService.$bind($scope, 'dates');

  this.addADate = function (newDateText) {
    datesService.$add({title: newDateText, done: false});
    $scope.newDateText = "";
  };

  this.removeDate = function (date) {
    $scope.dates.$remove(date.$id);
  };

  this.chooseDate = function (dates) {
    var localDates = _.map(dates.$getIndex(), function(index) { return dates[index]} );
    var chosenDate = _.sample(_.filter(localDates, function(date) { return !date.done; }));
    $scope.chosenDate = chosenDate.title;
  };
}]);
