angular.module("intersection").service("lightService", function(trafficService) {

  let stop = false;

  this.makeStop = () => {
    stop = true;
  }

  let lightColors = {};

  let NS = "ns", EW = "ew", count = 1, direction = "";

  this.changeLights = () => {
    if (count % 3 === 0) return leftTurnLights();
    else if (count % 2 === 0) direction = NS;
    else direction = EW;

    let lightColor = lightColors[direction],
        leftArrow = lightColors[direction + "Left"];

    if (!stop) {
      lightColor = "green", leftArrow = "flashing orange";
      trafficService.drive(direction);
      console.log(direction, lightColor, "left", leftArrow);
      setTimeout(() => {
        lightColor = leftArrow = "yellow";
        console.log(direction, lightColor, "left", leftArrow);
        setTimeout(() => {
          trafficService.stop();
          lightColor = leftArrow = "red";
          console.log(direction, lightColor, "left", leftArrow);
          setTimeout(() => {
            count++;
            this.changeLights();
          }, 500);
        }, 1000);
      }, 3000);
    } else {
      console.log("traffic stopped");
    }
  }

  let leftTurnLights = () => {
    if (!stop) {
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
            count++;
            this.changeLights();
          }, 500);
        }, 1000);
      }, 3000);
    } else {
      console.log("traffic stopped");
    }
  };

}); //end service
