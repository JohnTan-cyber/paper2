
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,paperObj,groundObject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine= Engine.create
	world=engine.word;

	paperObject=new paper(200,450,70);
	groundObject= new ground(width/2,670,width,20);
	binObject= new bin(1200,650);

	var render= Render.create({
		element:document.body,
		engine: engine,
		options:{
		width:1600,
		height:700,
		wireframes:false
		}
	})
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();
   paperObject.display();
   groundObject.display();
   binObject.display();
  
}



