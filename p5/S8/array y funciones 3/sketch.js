let vel = 3;
let rot = 1;

let nElementos = 15;
let nColumnas = 9;

let angulos = [];
let velocidades = [];
let tamanos = [];
let colores = [];


function setup() {
  createCanvas(512, 512);
  rectMode(CENTER);
  randomizar(); //esta vez puse todo dentro de una funcion, solo para no repetir. 
}

function draw() {
  background(255);
    for (let i = 0; i < nElementos; ++i) {
        push();
        translate(width/2, height/2);
        rotate(radians(30*i));
        let miRot = angulos[i] += velocidades[i];
        figura(100, 0, tamanos[i], miRot, colores[i]);
        pop();
        
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

    for (let i = 0; i < nElementos; ++i) {
            angulos[i] = random(360);
    }

    for (let i = 0; i < nElementos; ++i) {
            velocidades[i] = random(- 1,1);
    }
    
    for (let i = 0; i < nElementos; ++i) {
            colores[i] = color(random(255), 200, 100 +random(155));
    }

    for (let i = 0; i < nElementos; ++i) {
            tamanos[i] = random(15,35);
    }
  
}