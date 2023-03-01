let vel = 3;
let rot = 1;

function setup() {
    createCanvas(512, 512);
    rectMode(CENTER);
}

function draw() {
    rot += vel;

    background(255);
    figura(200,200,100,-rot/2, color(255,0,0));
    figura(300,290,50,-rot, color(255,0,255));
    figura(100,350,50,rot, color(255,255,0));
    
}

function figura( x, y, t, r, c) {
    push();
    translate(x, y);
    rotate(radians(r));
    fill(c);
    rect(0, 0, t, t);
    ellipse(0, 0, 5, 5);
    rect(t/2, 0, t/4, t/4);
    rect(-t/2, 0, t/4, t/4);
    pop();
}