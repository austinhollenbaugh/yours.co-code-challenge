angular.module("intersection").controller("controller", function($scope, lightService, trafficService) {

  $scope.trafficLight = () => {
    lightService.NS();
  };

}); //end controller
