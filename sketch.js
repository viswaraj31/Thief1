 var gameState=1;
 var babyi, thiefr, thiefl, policer , policel, craftingi ,bottlei, capi, milki;
 var walls = [],idc;
function preload(){
  babyi =  loadImage("baby image.png");
  policer =  loadImage("police r.png");
  policel =  loadImage("police l.png");
  thiefr =  loadImage("thief r.png");
  thiefl =  loadImage("thief l.png");
  bottlei =  loadImage("bottle.png");
  capi = loadImage("cap.png");
  milki = loadImage("milk.png");
  craftingi =  loadImage("crafting.png");
  idci =  loadImage("idc.png");
  babd = loadImage("babyd.png");
}

function setup(){
  createCanvas(400,400);

  
  detect = createSprite(25,375,15,30);
  thief = createSprite(25,365,15,10);
  trap2 = createSprite(380,15,40,40); 
  trap = createSprite(360,35,80,80);
  diamond = createSprite(375,25,20,20);
  lazar = createSprite(100,0,200,5);
  lazar1 = createSprite(300,400,200,5);
  jail = createSprite(-200,-200,10,400);
  jail2 = createSprite(-200,-200,10,400);
  jail5 = createSprite(-200,-200,10,400);
  jail3 = createSprite(-200,-200,10,400);
  jail4 = createSprite(-200,-200,10,400);
  arrest = createSprite(-200,-200,400,400);
  police = createSprite(375,170,20,20);
  pollice = createSprite(20,270,20,20);
  
 wall = createSprite(165,60,400,10);
 wall2 = createSprite(380,115,180,10);
 wall3 = createSprite(80,115,200,10);
 wall4 = createSprite(200,200,400,10);
 wall5 = createSprite(230,180,30,50);

 policeu = createSprite(360,365,20,20);
 policeu.addImage(policer);
 policeu.visible = false;

  wall.shapeColor="red";
  wall2.shapeColor="red";
  wall3.shapeColor="red";
  wall4.shapeColor="red";
  wall5.shapeColor="red";
    
  tp1 = createSprite(0,180,20,50);
  tp2 = createSprite(400,180,20,50);    
  tp1.shapeColor="green";
  tp2.shapeColor="green";

  wall.visible =false;
  wall2.visible =false;
  wall3.visible =false;
  wall4.visible =false;
  wall5.visible =false;

  baby = createSprite(310,315,20,20);
  baby.visible=false;

  craft = createSprite(100,350,20,20)
  craft.addImage(craftingi);
  craft.scale=0.7;
  craft.visible = false;
  
  walls[0] = createSprite(100,50,10,100);
  walls[1] = createSprite(175,100,250,10);
  walls[2] = createSprite(300,250,200,10);
  walls[3] = createSprite(200,200,150,10);
  walls[4] = createSprite(75,150,150,10);
  walls[5] = createSprite(295,125,10,50);
  walls[6] = createSprite(300,150,100,10);
  walls[7] = createSprite(125,180,10,50);
  walls[8] = createSprite(30,230,100,10);
  walls[9] = createSprite(25,300,50,10);
  walls[10] = createSprite(10,363,30,125);
  walls[11] = createSprite(185,350,30,100);
  walls[12] = createSprite(175,300,50,10);
  walls[13] = createSprite(80,240,10,25);
  walls[14] = createSprite(90,250,25,10);
  walls[15] = createSprite(375,300,100,10);
  walls[16] = createSprite(275,350,10,100);

  edges = createEdgeSprites();

  for(var i=0;i<walls.length;i++){
    walls[i].visible = false;
  }


  bot = createSprite(40,40,20,20);
  bot.visible=false;
  milk = createSprite(30,185,20,20);
  milk.visible=false;
  cap = createSprite(370,275,20,20);
  cap.visible=false;

  thief.addImage(thiefr);
  thief.scale = 0.07;

  baby.addImage(babyi);
  baby.scale = 0.2;

  milk.addImage(milki);
  milk.scale=0.1;

  cap.addImage(capi);
  cap.scale=0.1

  bot.addImage(bottlei);
  bot.scale=0.2

  police.addImage (policel);
  police.scale = 0.1;
     
  pollice.addImage (policer);
  pollice.scale = 0.1;
   
  arrest.shapeColor="green";
  lazar.shapeColor="red";
  lazar1.shapeColor="red";
  trap.shapeColor="green";
  trap2.shapeColor="green";
    
  
  diamond.shapeColor="lightblue";
  detect.shapeColor="green";
 
 
}

function draw() {
background("green");

diamond.rotation=45;

if(gameState === 1){
  if (keyDown("space")) {
    lazar.velocityY=5;
    lazar1.velocityY=-5;
    police.velocityX=-3;
    pollice.velocityX = 3;
}

  if(thief.isTouching(trap)){
    trap.shapeColor="red";
  }
  
  if(thief.isTouching(trap2)){
    trap2.shapeColor="red";
  }
  
  if(trap2.shapeColor==="red"||
  (lazar.isTouching(thief)||lazar1.isTouching(thief))||
    (thief.isTouching(police)||thief.isTouching(pollice))){
    lazar.velocityY=0;
    lazar1.velocityY=0;
    lazar.destroy();
    lazar1.destroy();
    diamond.destroy();
    police.destroy();
    pollice.destroy();
   
   
    trap.destroy();
    trap2.destroy();
    
    jail.x=200;
    jail.y=200;
    jail2.x=55;
    jail2.y=200;
    jail3.x=120;
    jail3.y=200;
    jail4.x=275;
    jail4.y=200;
    jail5.x=350;
    jail5.y=200;
    thief.x=200;
    thief.y=300;
    gameState=0;
  }
  
  if (thief.isTouching(detect)) {
  fill("black");
  textSize(25);
  text("Thief Detected",10,200);
  text("Press space to deploy security",10,220);
  }

  
  if (police.isTouching(edges[0])){
    police.addImage(policer);
  }
  if (police.isTouching(edges[1])) {
    police.addImage(policel);
  }
  if (pollice.isTouching(edges[0])){
    pollice.addImage(policer);
  }
  if (pollice.isTouching(edges[1])) {
    pollice.addImage(policel);
  }

  police.bounceOff(edges);
  pollice.bounceOff(edges);

}

  if(gameState === 0){
    fill("red");
    textSize(50);
    text("Thief Was Arrested",0,200);

    fill("blue");
    textSize(40);
    text("Press 'Q' to break out",0,50);
  }
  
  
  if(keyWentDown("Q")&&gameState === 0){
    jail.destroy();
    jail2.destroy();
    jail3.destroy();
    jail4.destroy();
    jail5.destroy();
    gameState=2;
  }
  
  if (gameState === 2) {
    thief.x=200;
    thief.y=25;
  
    gameState=3;
  }
  
  if(gameState === 3 || gameState === 1 || gameState === 4){
    if (keyDown("up")) {
    thief.y=thief.y-3;
  }

  if (keyDown("down")) {
    thief.y=thief.y+3;
   
  }

  if (keyDown("right")) {
    thief.x=thief.x+3;
   
    thief.addImage(thiefr)
  }

  if (keyDown("left")) {
    thief.x=thief.x-3;
     thief.addImage(thiefl)
  }
  }
  
  if(gameState === 3){
    wall.visible =true;
    wall2.visible =true;
    wall3.visible =true;
    wall4.visible =true;
    wall5.visible =true;


    if (thief.isTouching(wall)||
    thief.isTouching(wall2)||
    thief.isTouching(wall3)||
    thief.isTouching(wall5)) {
      thief.x=200;
      thief.y=25;
    }
    
    if (thief.isTouching(wall4)) {
      fill("blue");
      textSize(25);
      text("Need police uniform and Gun",50,250);
      thief.collide(wall4);
      tp1.shapeColor="blue";
      tp2.shapeColor="brown";
    }
    
    if(thief.isTouching(tp1)){
      wall.x=1000;
      wall2.x=500;
      wall3.x=500;
      wall4.x=1000;
      wall5.x=500;
      tp1.x=500;
      tp2.x=500;
      tp2.y=180;
      thief.x=200;
      thief.y=25;
      gameState=4;
    }
  }
  
  if(thief.x>175&&thief.x<225 && thief.y>20&&thief.y<45 && gameState === 4){
    fill("blue");
    textSize(20);
    text("We need to distract the baby with milk",30,180);
  }
  
  if(gameState === 4){
    

   
    for(var i=0;i<walls.length;i++){
      walls[i].visible = true;
      thief.collide(walls[i]);
    }
    policeu.visible = true;
    policeu.scale = 0.1
    craft.visible = true;
    craft.depth = 100;
    baby.visible = true;
    thief.collide(baby);
    bot.visible = true
    milk.visible = true;
    cap.visible=true;
    

    if(thief.isTouching(bot)){
      bot.x=55;
      bot.y=350;
    }

    if(thief.isTouching(milk)){
      milk.x=55;
      milk.y=350;
    }

    if(thief.isTouching(cap)){
      cap.x=55;
      cap.y=350;
    }

    if(craft.isTouching(bot)&&craft.isTouching(cap)&&craft.isTouching(milk)){
      craft.destroy();
      bot.destroy();
      milk.destroy();
      cap.destroy();
      idc = createSprite(75,355,20,20);
      idc.addImage(idci);
      idc.scale=0.1
      if(idc.x === 75){
        baby.x = 75;
        baby.y = 355;
      }
     
      if(baby.isTouching(idc)){
        baby.addImage(babd);
        idc.scale = 0;
      }

      if(thief.isTouching(policeu)){
        policeu.destroy();
        thief.addImage(policer);
        gameState = 3;
      }

    }
    }
 
  thief.bounceOff(edges);

  lazar.bounceOff(edges);
  lazar1.bounceOff(edges);

  drawSprites();  

  fill(0);
  textSize(10);
  text(mouseX + "," + mouseY, mouseX,mouseY);
}


