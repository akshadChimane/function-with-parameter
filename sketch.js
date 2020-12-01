var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
   rect64 =createSprite (200,400,60,60)
   rect64.shapeColor="green";
   rect64.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  rectTouching(fixedRect,movingRect);
  rectTouching(rect64,movingRect)
  
  drawSprites();
}

function rectTouching(circle,q){
  if (circle.x - q.x < q.width/2 + circle.width/2
    && q.x - circle.x < q.width/2 + circle.width/2
    && circle.y - q.y < q.height/2 + circle.height/2
    && q.y - circle.y < q.height/2 + circle.height/2) {
  circle.shapeColor = "red";
  q.shapeColor = "red";
}
else {
  circle.shapeColor = "green";
  q.shapeColor = "green";
}
}