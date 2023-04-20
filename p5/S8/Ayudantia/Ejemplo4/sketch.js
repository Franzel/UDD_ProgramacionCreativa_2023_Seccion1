let nElementos = 10;
let angulos = [];
let velocidades = [];
let colores = []


function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  fill(250);
  noStroke();
  

  for ( i = 0; i < nElementos; i++) {
    angulos[i] = [];
    velocidades[i] = [];
    colores[i] = [];
    for (let j = 0; j < nElementos; j++) {
      angulos[i][j] = 90 + random(-10, 10);
      velocidades[i][j] = random(-2,2);
      colores[i][j] = color(random(240),200);
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
      
      fill(colores[i][j]);
        let distancia = dist(mouseX, mouseY, i * 80, j * 80);
        let dMap = map(distancia, 0, 280, 170, 20);
        //stroke(miColor);
        rotador(80 * i, 80*j, angulos[i][j] + velocidades[i][j], dMap);
      
      
      
      
      
    }
  }
}

function rotador( x,  y,  a,  s) {
  push();
  translate(x, y);
  rotate(radians(a));
  circle(s, 0, 50);  
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
  for (let i = 0; i < nElementos; i++) {
    angulos[i] = [];
    velocidades[i] = [];
    for (let j = 0; j < nElementos; j++) {
      angulos[i][j] = 90 + random(-10, 10);
      velocidades[i][j] = random(-0.5,0.5);
    }
  }
}