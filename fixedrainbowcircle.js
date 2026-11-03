//RGB variables
let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // RGB Map for color
  r = map(mouseX, 0, width, 0, 255); // left to right, 0 to 255
  g = map(mouseY, 0, height, 0, 255); // top to bottom, 0 to 255
  b = 255 - r; // blue is reverse of red

  //loop 5 circles shrinking inside eachother
  if (keyIsDown(UP_ARROW) === true &&mouseX>0 && mouseX<400 &&mouseY>0 &&mouseY<400) {
    for (let i = 1; i < 6; i++) {
      fill(r, g, b);
      circle(mouseX, mouseY, 50 - i * 8);
    }
  }

  if (mouseIsPressed === true &&mouseX>0 && mouseX<400 &&mouseY>0 &&mouseY<400) {
    let size = 100;
    {
      fill(r, g, b);

      circle(mouseX, mouseY, size);
    }
  }
}
