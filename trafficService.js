angular.module("intersection").service("trafficService", function() {

  var intervalId;

  this.drive = (direction) => {
    intervalId = setInterval(() => {
    console.log(direction, "Car");
    }, Math.random() * 1000);
  };

  this.stop = () => {
    clearInterval(intervalId);
  };
});
