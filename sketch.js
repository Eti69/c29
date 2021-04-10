const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var world;
var engine;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var ground;
var hex;
var constraints;

function setup(){
var canvas=createCanvas(1000,600)
engine=Engine.create();
world=engine.world;

block=new Block(530,235,30,40);
block2=new Block(560,235,30,40);
block3=new Block(590,235,30,40);
block4=new Block(620,235,30,40);
block5=new Block(650,235,30,40);
block6=new Block(560,195,30,40);
block7=new Block(590,195,30,40);
block8=new Block(620,195,30,40);
block9=new Block(590,155,30,40);
ground=new Ground(590,285,300,20);
hex=new Hexagon(200,300,20);
constraints=new Connection(hex.body,{x:200,y:200});
Engine.run(engine);
}

function draw(){
Engine.update(engine);
background(0);
block.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
ground.display();
hex.display();
constraints.display();
}

function mouseDragged(){
Matter.Body.setPosition(hex.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
constraints.fly();
}
