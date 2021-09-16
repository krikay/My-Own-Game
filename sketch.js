var man
var manImage
var wall1
var wall2
var wall3 
var wall4
var wall5
var wall6
var wall7
var wall8
var wall9
var wall10
var wall11
var wall12
var wall13
var wall14
var wall15
var wall16
var wall17
var wall18
var wall19
var wall20 
var wall21 
var wall22
var wall23
var wall24
var wall25
var wall26
var wall27
var wall28
var wall29
var wall30
var wall31 
var wall32 
var wall33 
var wall34
var WinningPoint
function preload(){
  manImage=loadImage("man.png")
}
function setup() {
createCanvas(1000,1000)
man=createSprite(40,40)
man.scale=0.1
man.addImage(manImage)

wall1=createSprite(10,500,10,1000)

wall2=createSprite(500,10,1000,10)

wall3=createSprite(990,500,10,1000)

wall4=createSprite(500,990,1000,10)

wall5=createSprite(80,500,10,840)

wall6=createSprite(500,80,850,10)

wall7=createSprite(920,125,10,100)

wall8=createSprite(920,310,10,172)

wall9=createSprite(920,535,10,172)

wall10=createSprite(920,795,10,250)

wall11=createSprite(800,915,250,10)

wall12=createSprite(500,915,250,10)

wall13=createSprite(200,915,250,10)

wall14=createSprite(320,770,10,300)

wall15=createSprite(380,795,10,250)

wall16=createSprite(615,616,600,10)

wall17=createSprite(650,675,550,10)

wall18=createSprite(620,795,10,250)

wall19=createSprite(680,795,10,250)

wall20=createSprite(515,391,800,10)

wall21=createSprite(120,310,10,172)

wall22=createSprite(515,170,800,10)

wall23=createSprite(725,227,400,10)

wall24=createSprite(497,282,10,120)

wall25=createSprite(397,275,10,120)

wall26=createSprite(397,275,10,120)

wall27=createSprite(285,275,10,120)

wall28=createSprite(450,220,103,10)

wall29=createSprite(198,220,165,10)

wall30=createSprite(720,350,350,15)

wall31=createSprite(715,285,355,15)

wall32=createSprite(340,255,15,180)

wall33=createSprite(368,330,50,10)

wall34=createSprite(340,476,15,180)

WinningPoint=createSprite(860,255,30,30)
WinningPoint.shapeColor="red"

man.setCollider("circle",0,0,200)
}


function draw(){
  background("black")
  text(mouseX+","+mouseY,mouseX,mouseY)



if(keyWentDown(LEFT_ARROW)){
  man.velocityX=-5
  man.velocityY=0
}

if(keyWentDown(RIGHT_ARROW)){
  man.velocityX=5
  man.velocityY=0
}

if(keyWentDown(UP_ARROW)){
  man.velocityY=-5
  man.velocityX=0
}

if(keyWentDown(DOWN_ARROW)){
  man.velocityY=5
  man.velocityX=0
}
 
if(man.isTouching(wall1)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}

if(man.isTouching(wall2)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall3)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall4)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall5)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall6)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall7)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall8)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall9)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall10)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall11)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall12)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall13)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall14)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall15)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall16)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall17)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall18)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall19)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall20)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall21)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall22)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall23)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall24)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall25)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall26)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall27)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall28)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall29)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall30)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall31)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}if(man.isTouching(wall32)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}if(man.isTouching(wall33)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
if(man.isTouching(wall34)){
  fill("red")
  textSize(50)
  text("YOU LOSE",400,450)
  man.velocityX=0
  man.velocityY=0
}
fill("red")
text("TOUCH RED TO WIN",250,50)
drawSprites();
}

