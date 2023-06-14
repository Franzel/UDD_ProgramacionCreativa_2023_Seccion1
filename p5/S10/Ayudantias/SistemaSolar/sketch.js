let planeta = [];
let x = [];
let y = [];
function setup() {
  createCanvas(750, 750);
  for(let i=0; i<8; i++){
    planeta[i] = new Planeta(100+(50*i), 0, random(20,60),0,random(0.1, 1), color(random(255), random(255), random(255)));
  }
  
  for(let i=0; i<100; i++){
    x[i]= random(width);
    y[i]= random(height);
  }
}

function draw() {
  background(0, 0, 102);
  
  for(let i=0; i<100; i++){
    fill(255);
    rect(x[i], y[i], 3,3);
  }
  
  noStroke();
  fill(200,200,0);
  circle(375,375,80);
  
  for(let i=0; i<8; i++){
    noFill();
    stroke(255,100);
    circle(375,375,200+(100*i));
    
    noStroke();
    planeta[i].dibuja();
    planeta[i].rota();
  }
}

class Planeta {
  constructor(x, y, t, rot, vel, c) {
    //nombre especifico
    this.x = x;
    this.y = y;
    this.t = t;
    this.rot = rot;
    this.vel = vel;
    this.c = c;
  }
  dibuja() {
    push();
    translate(width/2, height/2)
    rotate(radians(this.rot))
    
    push()
    translate(this.x,0);
    rotate(radians(this.rot));
    fill(200);
    circle(this.t,0,10);
    pop();
    
    fill(this.c);
    circle(this.x,0, this.t);
    pop();
  }
  
  rota(){
    this.rot += this.vel/2;
  }
}