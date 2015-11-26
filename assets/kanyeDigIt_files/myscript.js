var img;  // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = loadImage("assets/kanye.png");  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
 image(img, width/2, height/2);
}