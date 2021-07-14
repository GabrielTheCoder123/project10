var sea,seaImg
var ship,shipImg1
function preload(){

 seaImg=loadImage("sea.png")
 shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
 


  sea=createSprite(50,160,20,50)
  sea.addImage(seaImg)
  edges=createEdgeSprites()

  ship=createSprite(200,200,100,100)
  ship.addAnimation("Img1",shipImg1)
  ship.scale=0.4
}

function draw() {
  background("blue");
 
  sea.velocityX=-2
  console.log(sea.x)

  if(sea.x<0){
    sea.x=sea.width/2
  }
 
  drawSprites()
}
