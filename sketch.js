var  Amongus,paperIMG
var packageBody,ground
var obsatcle1,obstacle2,obstacle3
var heart 
var thunder


function preload()
{
	backgroundIMG=loadImage("unnamed.png")
	dustbinIMG=loadImage("among us.png ")
	ObstacleIMG=loadImage("rock.png")
	obstacle2IMG=loadImage("hammer.png")   
	obstacle3IMG=loadImage("ball.png")  
	heartIMG=loadImage("heart.png") 
	thunderIMG=loadImage("thunder.png")
}

function setup() {
	createCanvas(1022, 547);
	
	

	Amongus=createSprite(100, 200, 30,30);
	Amongus.addImage(dustbinIMG)
	Amongus.scale=0.09
	Amongus.shapeColor=color("cyan")

obsatcle1=createSprite(200,10,30,30) 
obsatcle1.addImage(ObstacleIMG)
obsatcle1.scale=0.07
obsatcle1.velocityY=5	

obsatcle2=createSprite(370,540,30,30) 
obsatcle2.addImage(obstacle2IMG)
obsatcle2.scale=0.1
obsatcle2.velocityY=5	

obstacle3=createSprite(500,10,30,30)
obstacle3.addImage(obstacle3IMG)
obstacle3.scale=0.08
obstacle3.velocityY=5


thunder=createSprite(700,540,30,30)
thunder.addImage(thunderIMG)
thunder.scale=0.04
thunder.velocityY=5


heart=createSprite(900,300,30,30)
heart.addImage(heartIMG)
heart.scale=0.3


	
	             
	
	             


	

	//Create a Ground


	
		
		}
  



function draw() {
  
  background(backgroundIMG);
  edges = createEdgeSprites();

  if(keyDown("up")){
    Amongus.velocityX=0;
    Amongus.velocityY=-2;
  }
  if(keyDown("down")){
     Amongus.velocityX=0;
    Amongus.velocityY=2;
  }
  if(keyDown("left")){
    Amongus.velocityX=-2;
    Amongus.velocityY=0;
  }
  if(keyDown("right")){
    Amongus.velocityX=2;
    Amongus.velocityY=0;
  }
  if(Amongus.isTouching(thunder)||Amongus.isTouching(obstacle3)||Amongus.isTouching(obsatcle2)||Amongus.isTouching(obsatcle1)){
	fill= "black"
	textSize(40); 
	text("YOU LOSE",100,370);
  }
  if(Amongus.isTouching(heart)){
	textSize(40); 
	text("YOU WIN",100,370);
  }

Amongus.bounceOff(edges)
obsatcle1.bounceOff(edges)
obsatcle2.bounceOff(edges)
obstacle3.bounceOff(edges)
thunder.bounceOff(edges)
drawSprites();


} 


  




