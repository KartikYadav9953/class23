const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
     
    g1 = new ground();
    box1 = new Box(200,300,100,100);
    b2 = new Box(150, 370, 100, 100);
}

function draw(){
    background(0);
    Engine.update(engine);
    g1.display();
    box1.display();
    b2.display();
   
}