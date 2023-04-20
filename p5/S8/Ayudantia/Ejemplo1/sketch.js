let nCols = 14;
let nFilas = 14;
let angulos = [];
let velocidades = [];

let modos=0;
let cambios=0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  noFill();
  stroke(250);
  strokeWeight(4);
  

  for ( i = 0; i < nCols; i++) {
    angulos[i] = [];
    velocidades[i] = [];
    for (let j = 0; j < nFilas; j++) {
      angulos[i][j] = 90 + random(-10, 10);
      velocidades[i][j] = random(-0.9,0.9);
    }
  }
}

function draw() {
  background(0);
  
  
  for (let i = 0; i < angulos.length; i++) {
    for (let j = 0; j < angulos[1].length; j++) {
      //let hue = -100+i*50; 
      //let miColor = color(hue, 100, 100);
      
      angulos[i][j] += velocidades[i][j];
      
      if(modos==0){
        let distancia = dist(mouseX, mouseY, i * 80, j * 80);
        let dMap = map(distancia, 0, 280, 170, 20);
        //stroke(miColor);
        rotador(80 * i, 80*j, angulos[i][j] + velocidades[i][j], dMap);
      }
      
      if(modos==1){
        let distancia = dist(mouseX, mouseY, i * 40, j * 40);
        let dMap = map(distancia, 0, 280, 60, 5);
        //stroke(miColor);
        rotador(40 * i, 40*j, angulos[i][j] + velocidades[i][j], dMap);
      }
      
      
      
      
      
    }
  }
}

function rotador( x,  y,  a,  s) {
  push();
  translate(x, y);
  rotate(radians(a));
  rect(0, 0, s, s,10);  
  pop();
}


function keyPressed(){
  if(key=='1'){
    modos=0;
    cambios=0;
    randomizar();
  }
  if(key=='2'){
    modos=1;
    cambios=10;
    randomizar();
  }
}
function mouseClicked(){
 randomizar();
  
}

function randomizar(){
  for (let i = 0; i < nCols+cambios; i++) {
    angulos[i] = [];
    velocidades[i] = [];
    for (let j = 0; j < nFilas+cambios; j++) {
      angulos[i][j] = 90 + random(-10, 10);
      velocidades[i][j] = random(-0.5,0.5);
    }
  }
}