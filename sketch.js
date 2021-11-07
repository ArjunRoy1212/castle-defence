

function preload() {
  //start = loadImage("assets/start image.jpg");
  enemy1 = loadImage("assets/walking.gif");
  //enemyBroken = loadImage("assets/car2.png");
  //bg1 = loadImage("assets/track.jpg");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  background(enemy1);
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
