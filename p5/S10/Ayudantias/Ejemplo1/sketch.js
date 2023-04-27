let modulos = [];

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  
  for (let i = 0; i < 20; ++i) {
    modulos[i] = [];
    for (let j = 0; j < 20; ++j) {
      modulos[i][j] = new Modulo(
        60 * i,
        60 * j,
        20,
        color(random(255), 65, 100, 200),
        floor(random(1, 10))
      );
    }
  }
}

function draw() {
  background(255,10);

  for (let i = 0; i < modulos[0].length; ++i) {
    for (let j = 0; j < modulos[1].length; ++j) {
      modulos[i][j].dibuja();
      modulos[i][j].rota();
    }
  }
}

function mousePressed() {
  for (let i = 0; i < modulos[0].length; ++i) {
    for (let j = 0; j < modulos[1].length; ++j) {
      if (dist(modulos[i][j].posX, modulos[i][j].posY, mouseX, mouseY) < 15) {
        modulos[i][j].vel += 0.3;
      }
    }
  }
}

class Modulo {

  constructor(x, y, t, c, n) {
    this.posX = x;
    this.posY = y;
    this.tam = t;
    this.col = c;
    this.nRepeticiones = n;
    this.rot = 0;
    this.vel = 0;
  }

  dibuja() {
    noStroke();
    fill(this.col);
    push();
    translate(this.posX, this.posY);
    rotate(radians(this.rot));
    circle(20, 0, this.tam);
    pop();
    
  }

  tirita() {
    this.posX += random(-1, 1);
  }

  rota() {
    this.rot += this.vel;
  }
}