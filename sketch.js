const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies;
const Render = Matter.Render;

var dustinObj, paperObject, groundObject
var world;

function setup(){
     createCanvas(1600,700);
     rectMode(CENTRE);


    engine = Engine.create();
    world = engine.world;

    paperObject=new paper(200,450,70);
    groundObject=new ground(width/2,670,width,20);
    dustbinObj=new dustbin(1200,650);

    var render = Render.create({
        element: document.body,
        engine: engine,
        option:  {
            width:1600,
            height: 700,
            wireframes: false
        }
    });

    Engine.run(engine);
    Render.run(render);
  
}

function draw(){
    rectMode(CENTRE);
    background(230);

  paperObject.display();
  groundObject.display();
  dustbinObj.display();


}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:130,y:-145});
    }
}
