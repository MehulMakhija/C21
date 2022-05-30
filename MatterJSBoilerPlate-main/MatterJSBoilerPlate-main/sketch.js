var ball, ground, wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = Matter.Bodies.rectangle(300,390,600,10,{isStatic:true})
Matter.World.add(world,ground)
ball= Matter.Bodies.circle(50,30,20)
Matter.World.add(world,ball)
wall1=Matter.Bodies.rectangle(430,370,100,20,{isStatic:true})
wall2 = Matter.Bodies.rectangle(370,350,20,70,{isStatic:true})
wall3 = Matter.Bodies.rectangle(500,350,20,70,{isStatic:true})
Matter.World.add(world,wall1)
Matter.World.add(world,wall2)
Matter.World.add(world,wall3)
Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  rectMode(CENTER)
  fill("green")
  rect(ground.position.x,ground.position.y,600,10)
  rect(wall1.position.x,wall1.position.y,100,20)
  rect(wall2.position.x,wall2.position.y,20,70)
  rect(wall3.position.x,wall3.position.y,20,70)
  fill("hotpink")
  ellipse(ball.position.x,ball.position.y,40)
  drawSprites();
 
}

function keyPressed(){
	Matter.Body.applyForce(ball,ball.position,{x:0.05,y:0.1})
}



