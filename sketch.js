var bullet, wall;
var speed, weight, thickness;
var damage;

function setup() {
  speed=random(223,321);
  thickness=random(22,83)
  weight=random(30,52)
  createCanvas(1600,400);
 bullet=createSprite(50, 200, 30, 5);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=80,80,80;
  bullet.shapeColor= "white";
}

function draw() {
  background("BLUE");
  bullet.velocityX=speed;
  if(
   hasCollided(bullet, wall)

  )
  {
bullet.velocityX=0;
var damage=(0.5*weight*speed*speed)/ thickness*thickness*thickness ;
if(damage=>3.68 ||
  damage> 3.68 && damge< 12.43 ){
  wall.shapeColor="green";
}
if(damage=>12.43){
  wall.shapeColor="red";


  }
}
  drawSprites();
}
function hasCollided (abullet, awall){
bulletRightEdge= abullet.x + abullet.width
wallLeftEdge= awall.x + awall.width
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false

}