let w = [];

function setup() {
  createCanvas(400, 400);
  drawWalls();
}

function draw() {
  background(220);
  for(let i = 0 ; i <w.length ; i++){
    w[i].display()
  }
  
}
function drawWalls(){
  w.push(new Wall(200,50,10,200,"green"))
  w.push(new Wall(10,10,200,10,"pink"))
}
