
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(3000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	base=new Base(600,200,1000,20)
	
	bob1=new Bob(200,500,50,50)
	bob2=new Bob(400,500,50,50)
	bob3=new Bob(600,500,50,50)
	bob4=new Bob(800,500,50,50)
	bob5=new Bob(1000,500,50,50)

	rope=new slingshot(bob3.body,{x:600,y:200})
	rope2=new slingshot(bob1.body,{x:200,y:200})
	rope3=new slingshot(bob2.body,{x:400,y:200})
	rope4=new slingshot(bob4.body,{x:800,y:200})
	rope5=new slingshot(bob5.body,{x:1000,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  base.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
	Matter.Body.setPosition(bob2.body,{x:mouseX,y:mouseY})
	Matter.Body.setPosition(bob3.body,{x:mouseX,y:mouseY})
	Matter.Body.setPosition(bob4.body,{x:mouseX,y:mouseY})
	Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY})
	

}

