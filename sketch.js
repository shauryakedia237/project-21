var wall, thickness;
var bullet, speed,weight;

function setup() {
  createCanvas(1600,400);

  weight=random(30,52);
  speed=random(223,321);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor='blue';

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(255);

}

function draw() {
  background(0);  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=(0.5 * weight * speed* speed)/(thickness * thickness * thickness);
    if(deformation >= 10){
      wall.shapeColor=color(255,0,0);
    }
    if(deformation < 10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
 }