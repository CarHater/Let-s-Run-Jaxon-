var path, pathImg;

var runner, runningImg;

var power, powerImg;

var bomb, bombImg;

var coin, coinImg;

var energyDrink, energyDrinkImg;

var leftedge;

var rightedge;

function preload(){
  //pre-load images

  runningImg = loadAnimation("Runner-1.png", "Runner-2.png");

  pathImg = loadImage("path.png");

  powerImg = loadImage("power.png");

  bombImg = loadImage("bomb.png");

  coinImg = loadImage("coin.png");

  energyDrink = loadImage("energyDrink.png");

}

function setup(){
  createCanvas(361,400);
  //create sprites here


  path = createSprite(180,0,300,0);
  path.addImage("path",pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  leftedge = createSprite(14,0,20,800);
  leftedge.visible=false;

  rightedge = createSprite(350,0,20,800);
  rightedge.visible=false;

  
  runner = createSprite(200,360,0,0);
  runner.addAnimation("running", runningImg);
  runner.scale = 0.05;
  
}

function draw() {
  
  runner.bounceOff(leftedge);
  runner.bounceOff(rightedge);

  if(mouseX<330 && mouseX>42){
    runner.x=mouseX
    console.log(mouseX);
  }

  if(path.y>354){
    path.y=height/2;
  }
  
  


  background(0);
  drawSprites();

}
