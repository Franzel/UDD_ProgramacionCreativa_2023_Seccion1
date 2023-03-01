function setup(){
  createCanvas(500,200);
}

function draw(){
  //background(0,255,0);
  print(random(width));
  fill(random(255),random(255),random(255)); 
  circle(random(width), random(height), random(10,60));
  
}