const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1,box2,box3
var ground
var engine, world;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box1 = new Box(220,20,78,200);
box2 = new Box(260,150,100,100);
box3 = new Box(250,200,20,20)
ground = new Ground(200,350,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
 box1.display();
 box2.display();
 box3.display();
 ground.display();
}