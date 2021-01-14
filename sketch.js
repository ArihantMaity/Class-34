const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


//var gameState = "onSling";


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1400,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(700,height,1400,20);
    

    box1 = new Box(1200,420,70,200);
    box2 = new Box(1200,300,70,70);
    box3 = new Box(1200,200,70,150);

    box4 = new Box(1000,420,100,90);
    box5 = new Box(1000,300,100,180);
   
    ball1 = new Ball(300,200,50);
   

    
    slingshot = new SlingShot(ball1.body,{x:700, y:50});
}

function draw(){
   
        background("orange");
    
    
    Engine.update(engine);
    //strokeWeight(4);
    fill("green")
    box1.display();
    fill("cyan")
    box2.display();
    ground.display();
    slingshot.display(); 
    fill("purple");
    box3.display();
    fill("yellow");
     box4.display();
     fill("blue");
     box5.display();
    fill("red");
    ball1.display();

    
    
     
}






/*function keyPressed(){
    if(keyCode === 32){
        bird.trajectory=[]
        Matter.Body.setPosition(bird.body,{x:200,y:50});
       slingshot.attach(bird.body);
    
    }
}*/

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}
