var col;// variable que usaremos para el color
//noprotect
var espacio;

function setup() {
  createCanvas(800, 800);
  espacio = 20;
}

function draw() {
  background (250, 50, 250);
  
  //For loop biDimensional
  for (var i=0; i<width; i++) {
    for (var j=0; j<height; j++) {
      rect(espacio * i, espacio * j, 10, 10);
    }
  }
}