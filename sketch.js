const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box1 = new box(200,100,50,100);
box2 = new box(200,300,50,50);
ground1 = new ground(200,390,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    
    box1.display();
    box2.display();
    ground1.display();
    
}