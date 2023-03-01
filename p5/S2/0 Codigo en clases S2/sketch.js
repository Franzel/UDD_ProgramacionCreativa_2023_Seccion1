let tamX;
let tamY;

function setup() {
  createCanvas(600, 600);
  tamX = width/3;
  tamY = height/3;
}

function draw() {
  background(255,0,0);
  
  noFill();
  strokeWeight(5);
  
  //line(0,0,300,300);
  line(0, 0, width/2, height/2);
  //circle(0,0,100);
  //rect(width/2, height/2, tamX, tamY);
  //rect(tamX, tamY, tamX, tamY);
  
  //fill(255,255,15);
  stroke(255);
  rect(width/2 - tamX/2, height/2 - tamY/2, tamX, tamY);
  fill(0,255,0);
  rect(width-tamX, height-tamY, tamX, tamY);
  fill(0,0,255);
  ellipse(width/2, height/2, tamX, tamY);
}