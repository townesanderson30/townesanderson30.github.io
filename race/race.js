let racerXs = [30, 50, 30, 30, 30, 30 , 30,];
let startY = 50;
let yStep = 60;
let finishX = 560;
let bestX = 0
function setup() {
  createCanvas(600, startY + yStep * racerXs.length);
}

function draw() {
  bestX = bestDet(racerXs)
  background(240);
  text(bestX, 10, 10)
  line(finishX, 0, finishX, height);
  for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;
    if (racerXs[i] < finishX) {
      racerXs[i] += random(1, 3);
    }
    circle(racerXs[i], y, 24);
  }
  
}


function bestDet(list) {
  let best = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] > best) {
      best = list[i];
    }
  }
  return best;
}