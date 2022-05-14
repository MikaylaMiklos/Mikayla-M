//player movement var
var playerX = 50;
var playerY = 50;

//movement var
var w = 100;
var s = 110;
var a = 50;
var d = 60;

function setup()
{
    createCanvas(500,600); 
}

function draw()
{
    background(191, 219, 154);

    //call caption
    message();

    //call cat
    cat();

   // call player funct
   playerCreate();

   //call boop message
   playerBoops();
}





//Shadow - my cat :)
function cat()
{
    fill(61, 60, 60);

    //tail
    rect(320,550,120,20);

    //body
    rect(175,250,150,600);

    //head
    triangle(150,250,250,350,350,250);

    //ears
    triangle(150,200,150,250,180,250);
    triangle(320,250,350,200,350,250);

    //eyes
    fill(235, 237, 161);
    triangle(180,270,220,280,210,300);
    triangle(320,270,280,280,290,300);

    fill(61, 60, 60);
    circle(210,284,13);
    circle(290,284,13);

    //nose
    fill(79, 77, 77);
    triangle(240,330,250,340,260,330);

    //arms
    line(210,400,210,500);
    line(290,400,290,500);
    circle(210,500,20);
    circle(290,500,20);
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

function message()
{
        //title and signature
        fill(46, 51, 58);
        textSize(23);
        text("touch Shadows nose!", 10,25);
}

//Boop message
function boopMessage()
{
    fill(106, 184, 136);
    textSize(20);
    text("Thank you for a great semester!", 105,190);
}

//player reaches nose
function playerBoops()
{
    if(playerX > 250-1 && playerY > 330-1)
    {
    boopMessage();
    }
}