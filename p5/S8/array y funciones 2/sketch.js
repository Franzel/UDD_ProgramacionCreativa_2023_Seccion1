var vel = 3;
var rot = 1;

var nFilas = 9;
var nColumnas = 9;

var angulos = [];
var velocidades = [];
var tamanos = [];
var colores = [];


function setup() {
  createCanvas(512, 512);
  rectMode(CENTER);
  randomizar(); //esta vez puse todo dentro de una funcion, solo para no repetir. 
}

function draw() {
  background(255);
  
  //llamar a la fiuncion randomizar cada cierta cantidad de cuadros
  if(frameCount%30==0){
    randomizar();
  }

  for (var i = 0; i < velocidades[0].length; ++i) {
    for (var j = 0; j < velocidades[1].length; ++j) {
      var miRot = angulos[i][j] += velocidades[i][j];
      figura(60 * i, 60 * j, tamanos[i][j], miRot, colores[i][j]);
    }
  }
}

function figura(x, y, t, r, c) {
  push();
  translate(x, y);
  noStroke();
  fill(c/3, 50);
  ellipse(0, 0, 50, 50);
  rotate(radians(r));
  fill(c);
  stroke(c*3);
  rect(0, 0, t, t);
  fill(c*2);
  ellipse(0, 0, 5, 5);
  rect(t / 2, 0, t / 4, t / 4);
  rect(- t / 2, 0, t / 4, t / 4);
  pop();
}

function mousePressed() {
  randomizar();
}

function randomizar() {

  for (var i = 0; i < nFilas; ++i) {
    angulos[i] = [];
    for (var j = 0; j < nColumnas; ++j) {
      angulos[i][j] = random(360);
    }
  }

  for (var i = 0; i < nFilas; ++i) {
    velocidades[i] = [];
    for (var j = 0; j < nColumnas; ++j) {
      velocidades[i][j] = random(- 1, 1);
    }
  }

  for (var i = 0; i < nFilas; ++i) {
    colores[i] = [];
    for (var j = 0; j < nColumnas; ++j) {
      colores[i][j] = color(random(255), 200, 100 +random(155));
    }
  }

  for (var i = 0; i < nFilas; ++i) {
    tamanos[i] = [];
    for (var j = 0; j < nColumnas; ++j) {
      tamanos[i][j] = random(20, 40);
    }
  }
}