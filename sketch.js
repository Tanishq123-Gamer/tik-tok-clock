var hr,min,sec;
var hrAngle,minAngle,secAngle;


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);  
  hr=hour();
  min=minute();
  sec=second();

  hrAngle=map(hr%12,0,12,0,360);
  minAngle=map(min,0,60,0,360);
  secAngle=map(sec,0,60,0,360);
  translate(400,200);
  rotate(-90);

  //sec needle
  push() 
  rotate(secAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,150,0);
  pop()

  //min needle 
  push() 
  rotate(minAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop()

//hr needle
push() 
  rotate(hrAngle);
  stroke("magenta");
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  strokeWeight(10);
  noFill();
  //sec arc
  stroke("red");
  arc(0,0,300,300,0,secAngle);

  //min arc 
  stroke("green");
  arc(0,0,270,270,0,minAngle);

  //hr arc 
  stroke("magenta");
  arc(0,0,240,240,0,hrAngle);
}