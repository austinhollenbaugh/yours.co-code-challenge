angular.module("intersection").service("lightService", function(trafficService) {

  //create button to stop everything

  var lightColors = {};

  this.NS = () => {
    lightColors.NS = "green";
    lightColors.nsLeft = "flashing orange";
    trafficService.drive("n/s");
    console.log("N/S", lightColors.NS, "nsLeft", lightColors.nsLeft);
    setTimeout(() => {
      lightColors.NS = "yellow";
      lightColors.nsLeft = "yellow";
      console.log("N/S", lightColors.NS, "nsLeft", lightColors.nsLeft);
      setTimeout(() => {
        trafficService.stop();
        lightColors.NS = "red";
        lightColors.nsLeft = "red";
        console.log("N/S", lightColors.NS, "nsLeft", lightColors.nsLeft);
        setTimeout(() => {
          leftTurnLights();
        }, 500);
      }, 1000);
    }, 3000);
  };

  var leftTurnLights = () => {
    lightColors.leftTurn = "green";
    trafficService.drive("leftTurn");
    console.log("leftTurn", lightColors.leftTurn);
    setTimeout(() => {
      lightColors.leftTurn = "yellow";
      console.log("leftTurn", lightColors.leftTurn);
      setTimeout(() => {
        trafficService.stop();
        lightColors.leftTurn = "red";
        console.log("leftTurn", lightColors.leftTurn);
        setTimeout(() => {
          this.EW();
        }, 500);
      }, 1000);
    }, 3000);
  };

  this.EW = () => {
    lightColors.EW = "green";
    lightColors.ewLeft = "flashing orange";
    trafficService.drive("e/w");
    console.log("E/W", lightColors.EW, "ewLeft", lightColors.ewLeft);
    setTimeout(() => {
      lightColors.EW = "yellow";
      lightColors.ewLeft = "yellow";
      console.log("E/W", lightColors.EW, "ewLeft", lightColors.ewLeft);
      setTimeout(() => {
        trafficService.stop();
        lightColors.EW = "red";
        lightColors.ewLeft = "red";
        console.log("E/W", lightColors.EW, "ewLeft", lightColors.ewLeft);
        setTimeout(() => {
          this.NS();
        }, 500);
      }, 1000);
    }, 3000);
  };

}); //end service
