let nElementos = 12;
let tamanos = [];
let angulos = [];
let velocidades = [];

let delta = 0;
let mov = 1;

function setup() {
  createCanvas(500, 500);
  noFill();
  stroke(250);
  strokeWeight(4);
  rectMode(CENTER);
  
  for (let i = 0; i < nElementos; i++) {
    tamanos[i] = [];
    angulos[i] = [];
    velocidades[i] = [];
    for (let j = 0; j < nElementos; j++) {
      tamanos[i][j] = random(30,80);
      angulos[i][j] = 90 + random(-10, 10);
      velocidades[i][j] = random(-0.9,0.9);
    }
  }
}

function draw() {
  background(0);
  
  delta += mov;
  
  if(delta>20 || delta <0){
    mov *= -1;
  }
  for (let i = 0; i < nElementos; i++) {
    for (let j = 0; j < nElementos; j++) {
      angulos[i][j] += velocidades[i][j];
      
      modulo(70 * i, 70 * j, tamanos[i][j]+delta, angulos[i][j] + velocidades[i][j]);
    }
  }
}

function modulo(x, y, t, r) {
  push();
  translate(x, y);
  rotate(radians(r))
  square(0, 0, t);
  pop();
}

function mouseClicked(){
  randomizar();
}

function randomizar(){
  for (let i = 0; i < nElementos; i++) {
    tamanos[i] = [];
    for (let j = 0; j < nElementos; j++) {
      tamanos[i][j] = random(30,80);
    }
  }
}
