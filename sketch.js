
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	roof3= new Roof(800,25, 1500,50);
	ball3= new Ball(800,500,30);
	chain3= new Chain(roof3.body, ball3.body)

	roof1= new Roof(560,25,1500,50);
	ball1= new Ball(560,500,30);
	chain1= new Chain(roof1.body, ball1.body);
	
	roof2= new Roof(680,25,1500,50);
	ball2= new Ball(680,500,30);
	chain2= new Chain(roof2.body, ball2.body);

	roof4= new Roof(920,25,1500,50);
	ball4= new Ball(920,500,30);
	chain4= new Chain(roof4.body, ball4.body);

	roof5= new Roof(1040,25,1500,50);
	ball5= new Ball(1040,500,30);
	chain5= new Chain(roof5.body, ball5.body);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  roof3.display();
  ball3.display();
  chain3.display();

  ball1.display();
  chain1.display();

  ball2.display();
  chain2.display();

  ball4.display();
  chain4.display();

  ball5.display();
  chain5.display();

  drawSprites();

}
 
function keyPressed() {
	if(keyCode=== UP_ARROW) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:100, y:-100})
	}

	}
	
	
	
	
	


