var img;  // Declare variable 'img'.
var v1;
var sample;

function preload() {
img = loadImage('assets/kanye.png');
sample = loadSound('assets/sfx.mp3');
}

function setup() {
  createCanvas(640, 480);
  imageMode(CENTER);
  v1= createVector(320,240);
}

function draw() {
	background(0);
  // Displays the image at its actual size at point (0,0)
 image(img, v1.x,v1.y);
}

function mousePressed() {
  if (mouseX < v1.x+(img.width/2) && mouseY < v1.y+(img.height/2) && mouseX > v1.x-img.width && mouseY > v1.y-img.height) {
    sample.play();
  }
}

function mute() {
    var image = document.getElementById('mutebutton');
    if (image.src.match("assets/quaver.png")) {
        image.src = "assets/mute.png";
    } else {
        image.src = "assets/quaver.png";
    }
}