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


var circleObject;
var circleObject2;
var circleObject3;


function setup() 
{
    createCanvas(500,600);

    circleObject = new circles(100,200,20);
    circleObject2 = new circles(350,100,30);
    circleObject3 = new circles(250,400,40);

    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeNSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
  
function draw() 
{
    background(160, 175, 189);

    fill(183, 163, 199);
    circleObject.display();
    fill(232, 194, 183);
    circleObject2.display();
    fill(180, 224, 210);
    circleObject3.display();

    //call borders
    borderExit();

    // call player funct
    playerCreate();

    //call exit message
    playerExits();

    //call obstacles
    obstacles();

    //call obstacles movement
    obstaclesMovement();

    mouseClicked();
}


//obstacles
function obstacles()
{
    //obst 1
    fill(random(0, 255), 125, 125);
    circle(shapeX, shapeY, random(10,20));
    //obst 2
    fill(random(0, 255), 125, 125);
    circle(shapeM, shapeN, random(10,20));
}

//obstacle movement
function obstaclesMovement()
{
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

//exit and borders
function borderExit()
{
    fill(0,0,0);
    rect(0,0,500,10);
    rect(492,0,500,600);
    rect(0,590,500,600);
    rect(0,0,8,600);

    fill(80, 82, 84);
    rect(490,550,500,600);
    textSize(15);
    text('Exit', 460, 575);
}

//player
function playerCreate()
{
    fill(106, 184, 136);
    circle(playerX,playerY,32)
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

 //mouse click
 function mouseClicked()
 {
     fill(143, 171, 217);
     circle(mouseShapeX, mouseShapeY, 20);
     mouseShapeX = mouseX;
     mouseShapeY = mouseY;
 }

//exit message
function exitMessage()
{
        fill(255, 218, 107);
        textSize(40);
        text("You Win!", 150,200);
}

//player reaches exit
function playerExits()
{
    if(playerX > 460 && playerY > 577-50)
    {
    exitMessage();
    }
}