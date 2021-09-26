var boy, boy_gun ;
var zombiem, zombief;
var ground;
var gun;


function preload(){
  boyImg = loadImage ("bboy.png")
  boy_gunImg = loadImage ("boy_gun.png")
  zombiemImg = loadImage ("zombiem.png")
  zombiefImg = loadImage("zombief.png")
  groundImg = loadImage ("ground1.png")
  gunImg = loadImage ("gun.png")
}

function setup() {
    createCanvas (1200, 550);

    ground = createSprite (642,462);
    ground.addImage("ground", groundImg)
    //ground.scale = 0.9
    ground.velocityX=-3

    boy = createSprite (80,410);
    boy.addImage("boy", boyImg)
    boy.scale=0.5

    zombiesGroup = new Group();
    gunGroup = new Group();
    score = 0;

}

function draw() {
    background("black")
    text("Score: "+ score,30,50);

    if (keyWentDown("space")) {
      gun = createSprite (105,425);
      gun.addImage(gunImg);
      gun.scale = 0.05
      gun.velocityX = 7 
      gunGroup.add(gun); 

    }
    if (zombiesGroup.collide(gunGroup)) {
      zombies.destroyEach();
      gunGroup.destroyEach();
    }
  


    if (ground.x < 0||ground.x>600){
      ground.x = ground.width/2;
    }

    spawnZombies()

  drawSprites();
}
function spawnZombies() {
  if(frameCount % 350 === 0) {
    var zombies = createSprite(1200,403,20,30);
    zombies.setCollider('circle',0,0,45)
    // zombies.debug = true
  
    zombies.velocityX = -3;
    

    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: zombies.addImage(zombiemImg);
              break;
      case 2: zombies.addImage(zombiefImg);
              break;
      default: break;
    }
    
        
    zombies.scale = 0.3;
    //zombies.lifetime = 300;
    //zombies.depth = trex.depth;
    //trex.depth +=1;
    
    zombiesGroup.add(zombies);
  }
}