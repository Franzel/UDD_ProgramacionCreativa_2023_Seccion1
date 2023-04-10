let nCols = 50;
let nFilas = 50;
let angulos = [];
let velocidades = [];

function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < nCols; i++) {
    angulos[i] = [];
    velocidades[i] = [];
    
    for (let j = 0; j < nFilas; j++) {
      angulos[i][j] = random(0, 360);
      velocidades[i][j] = random(-3,3);
    }
  }
  rectMode(CENTER);
}

function draw() {
  background(0);


  for (let i = 0; i < angulos.length; i++) {
    for (let j = 0; j < angulos[1].length; j++) {
      angulos[i][j] += velocidades[i][j];
      rotador(15 * i, 15*j, angulos[i][j] + velocidades[i][j], 10);
    }
  }
}

function rotador( x,  y,  a,  s) {
  push();
  translate(x, y);
  rotate(radians(a));
  rect(0, 0, s, s);
  pop();
}