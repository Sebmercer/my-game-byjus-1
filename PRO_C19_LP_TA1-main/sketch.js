var backgroundImage, ground
var track, track1
function preload(){
 backgroundImage=loadImage("background.jpeg")
 track1=loadImage("trainTrack.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  ground=createSprite(750,300,width+100,height)
  ground.addImage(backgroundImage)
  ground.scale=7
  ground.velocityY=10
  track=createSprite(750,370,20,60)
  track.addImage(track1)
  track.scale=1.7
  track.velocityY=10
}

function draw(){
  background(0);
  drawSprites()
  if(ground.y>500){
    ground.y=300
  }

  if(track.y>500){
    track.y=300
  }

}
