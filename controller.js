angular.module("intersection").controller("controller", function($scope, lightService, trafficService) {

  $scope.stop = () => {
    lightService.makeStop();
  }

  $scope.trafficLight = () => {
    lightService.changeLights();
  };

}); //end controller
