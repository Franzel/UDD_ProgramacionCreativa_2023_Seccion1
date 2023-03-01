let tam;
let posX;
let vel;
let miColor1, miColor2;

function setup() {
  createCanvas(500, 500);
  tam = 100;
  posX = width/2;
  vel = 4;
  miColor1 = color(255,0,0);
  miColor2 = color(0,255,0);
}

function draw() {
  background(255);
  //vel = random(4);

  if (mouseIsPressed) {
    if (mouseX>width/2) {
      fill(miColor1);
      posX = posX + vel;
    } else {
      fill(miColor2);
      posX = posX - vel;
    }
  }else{
    fill(255);
  }


  if (posX > width) {
    posX = 0;
  }
  if (posX < 0) {
    posX = width;
  }
  
  circle(posX, height/2, tam);
}