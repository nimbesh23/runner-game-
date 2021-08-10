var path , pathImg;
var runnner , runnerImg;
var edges;

function preload(){
  //pre-load ipath
  
  runnerImg=loadAnimation("Runner-1.png" , "Runner-2.png")
  pathImg=loadImage("path.png");
  
}

function setup(){
  createCanvas(600,600);
  //create sprites here
path = createSprite(200,200);
path.addImage("path",pathImg);
path.velocityY = 4;
path.scale =3;

edges = createEdgeSprites();

runner=createSprite(200,500);
runner.addAnimation("runner", runnerImg);
runner.scale = 0.1;

}

function draw() {
  background("white");
  drawSprites();
  runner.x = mouseX;

  if(path.y>600) {
    path.y=300;
  }

  runner.collide(edges[0] );
  runner.collide(edges[1]);
}



