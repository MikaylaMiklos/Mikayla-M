//player movement var
var playerX = 50;
var playerY = 50;

//movement var
var w = 100;
var s = 110;
var a = 50;
var d = 60;

// obstacles
//obst 1 x and y var
var shapeX = 200;
var shapeY = 15;
var shapeYSpeed;

//obst 2 x and y var
var shapeM = 300;
var shapeN = 15;
var shapeNSpeed;

//shape created
var mouseShapeX;
var mouseShapeY;


function setup() 
{
    createCanvas(500,600);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeNSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
  
function draw() 
{
    background(160, 175, 189);

    // exit
    fill(80, 82, 84);
    rect(490,550,500,600);
    textSize(15);
    text('Exit', 460, 575);

    //Player
    fill(106, 184, 136);
    circle(playerX,playerY,32)
    
    //player exits
    if(playerX > 460 && playerY > 577-50)
    {
        fill(255, 218, 107);
        textSize(40);
        text("You Win!", 150,200);
    }

    //obstacles
    //obst 1
    fill(185, 130, 224);
    circle(shapeX, shapeY, 10);
    //obst 2
    fill(224, 141, 130);
    circle(shapeM, shapeN, 20);
    //obst movement
    shapeY += shapeYSpeed;
    shapeN += shapeNSpeed;

    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeN > height)
    {
        shapeN = 0;
    }
}


// player movement
function keyPressed() 
{
      if (key == 'd') 
      {
        playerX += 20;
      } 
      else if (key == 'a') 
      {
        playerX -= 20;
      }
      else if (key == 'w') 
      {
        playerY -= 20;
      }
      else if (key == 's') 
      {
        playerY += 20;
      } 

 }

 function mouseClicked()
 {
     fill(143, 171, 217);
     circle(mouseShapeX, mouseShapeY, 20);
     mouseShapeX = mouseX;
     mouseShapeY = mouseY;
 }