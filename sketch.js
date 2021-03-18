
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var paperImg
var world;


function preload() {
    paperImg= loadImage("sprites/paper.png")
}




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper= new Paper(100,669,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  paper(paperImg);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

  
  drawSprites()

  }

  function keyPressed() {
	  if(keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paperObject.body,paperObject.body.positon,{x:130,y:-145})
	  }
  }

