const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = []
var maxDrops = 500
var rain
var man

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

   ground = new Ground(300,600,1500,10)
   
   if(frameCount %  150 === 0){
   for( var i=0; i<maxDrops ; i++){
       drops.push(new Rain(random(0,1200),random(0,700)))
   }
}
}

function draw(){
    background(0)
    Engine.update(engine);

    ground.display();
    
    for( var i=0; i<maxDrops ; i++){
        drops[i].display()
    }
    for( var i=0; i<maxDrops ; i++){
        drops[i].drope()
    }
}   

