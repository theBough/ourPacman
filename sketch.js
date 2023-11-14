let w = [];

function setup() {

  createCanvas(400, 400);
  drawWalls();
}

function draw() {
  background("#264653");
  for(let i = 0 ; i <w.length ; i++){
    w[i].display()
  }
  
}
function drawWalls(){
  w.push(new Wall(200,50,10,200,"#2A9D8F"))
  w.push(new Wall(10,10,200,10,"#E9C46A"))
  w.push(new Wall(10,300,200,10,"#F4A261"))
  w.push(new Wall(380,10,10,300,"#E76F51"))
}
