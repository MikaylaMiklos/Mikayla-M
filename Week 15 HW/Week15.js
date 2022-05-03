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
var myXs = [];
var myYs = [];
var myDiameters = [];

var shapeYSpeed = [];

var i = 0;

//shape created
var mouseShapeX;
var mouseShapeY;

function setup() 
{
    createCanvas(500,600);
   
    var x = 100;
    var y = 50;
    var diameter = 25;
    
    for(var i = 0; i < 5; i++)
    {
        shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myXs[i] = x;
        myYs[i] = y;
        myDiameters[i] = diameter;
        x += 85;
        y += 0;
        diameter += 10;
    }
}
  
function draw() 
{
    background(160, 175, 189);

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
    for(var i = 0; i < myXs.length; i++)
    {
        fill(random(0, 255), 125, 125);
        circle(myXs[i],myYs[i],myDiameters[i]);
        shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    }
}

//obstacle movement
function obstaclesMovement()
{
        //obst movement
        myYs[i] += shapeYSpeed[i];
    
        if(myYs[i] > height)
        {
            myYs[i] = 0;
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