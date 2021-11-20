const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var playerArcher;
var arrow;
var angle;


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  archerimage = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle = -90

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(playerBase.position.x+95, playerBase.position.y - 160,350, 120, options);
  World.add(world,player)

  playerArcher = new PlayerArcher(365, playerBase.position.y-100, 120, 120, angle)

  playerArrow = new PlayerArrow(playerArcher.body.position.x, playerArcher.body.position.y,100,10)
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  playerArcher.display()
  playerArrow.display()

  if(keyCode === 32){
    playerArrow.shoot(playerArcher.body.angle)
  }

}
function keyReleased(){

}




