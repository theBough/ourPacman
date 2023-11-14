let w;

function setup() {
  createCanvas(400, 400);
  w = new Wall(200,50,10,200,"green")
}

function draw() {
  background(220);
  w.display()
}
