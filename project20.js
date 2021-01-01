var wall, thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(800,400);
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed
  wall = createSprite(1200, 200, thickness, height/2);
}

function draw() {
  background(255,255,255);  
  drawSprites();



function hasCollided(lbullet, lwall)
{ 
     bulletRightEdge = lbullet.x +lbullet.width;
     wallLeftEdge = lwall.x;
     if(bulletRightEdge>= wallLeftEdge)
     {
       return true
     }
     return false
}
if(hasColloded(bullet, wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/thickness * thickness * thickness;

  if(damage>10)
  {
    wall.shapeColor = clolr(255,0,0);
  }


  if(damage<10)
  {
    wall.shapeColor
  }
}