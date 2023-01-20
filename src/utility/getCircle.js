//Utility Function
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

Math.getDistance = function (x1, y1, x2, y2) {
  var xs = x2 - x1,
    ys = y2 - y1;
  xs *= xs;
  ys *= ys;
  return Math.sqrt(xs + ys);
};

let radius = Math.getDistance(0, 0, centerX, centerY);
let fullWidth = radius * 2;
let percentIncrease = fullWidth / 100;

export { radius, fullWidth, percentIncrease };
