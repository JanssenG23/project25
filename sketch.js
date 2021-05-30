const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ball;
var ballimg,dustbinimg;

function preload()
{
    ballimg = loadImage("pictures/paper.png");
	dustbinimg = loadImage("pictures/dustbingreen.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(1600,height,3600,80);
	ball = new Ball(200,150,70,70);
	
	

	box1 = new Box(1150,610,20,160);
	box2 = new Box(1250,650,200,20);
	box3 = new Box(1350,610,20,160);
	box4 = createSprite(1150,580,20,160);
	box5 = createSprite(1250,550,300,20);
	box5.addImage(dustbinimg);
	box5.scale = 0.75
	box6 = createSprite(1350,580,20,160);
box5.dept = box6.depth+1

	Engine.run(engine);
  
}


function draw() {
  background('lightgrey');
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ball.display();
//   box1.display();
  box2.display();
//   box3.display();
  ground1.display();
  box5.display()
  
 // drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:450,y:-295});

}

}
