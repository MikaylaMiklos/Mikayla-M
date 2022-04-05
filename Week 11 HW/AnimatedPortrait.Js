//eyes
var W = 245;
var X = 185;

//eyebrows
var Y = 180;
var E = 150;

//mouth var
var M = 200;
var N = 220;
var O = 225;

var movement;
var movementEye = 2;
var mMovement = 1;

var size = 22;
var count = 0;
var sizeDirection = 5;
//only called once
function setup() {
    createCanvas(500,500);
    movement = floor(random() * 2) + 1;
  }

/*
 called continuously
*/

  function draw() {
    background(94, 115, 132,);
    textSize(size)
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Anxious",10,50);

    strokeWeight(6);

  //hair behind head
  fill(66, 50, 42);
  rect(175,83,100,180);

    //neck
    fill(208, 183, 159);
    rect(220,225,85,65);

    //head
    fill(225, 206, 186);
    circle(250,170,175);

    //hair
    fill(66, 50, 42);
    rect(260,83,100,180);
    line(250,83,255,200)

    //eyes
    fill(0);
    point(X,Y);
    point(W,Y);
    X+=movement;
    if(X >= 195 || X <= 175)
    {
        movement *= -1;
     }
 
    W+=movement;
    if(W >= 260 || W <= 230)
    {
        movement *= -1;
     }


    //eyelashes
    triangle(170,175,175,170,185,175);
    triangle(230,175,235,170,255,175);

    //eybrows
    line(165,E,180,E);
    line(225,E,255,E);
    E+=movementEye;
    if(E >= 250 || E <= 240)
    {
        movementEye *= -1;
    }

    //mouth and nose
    line(M,O,N,O);
    M+=mMovement;
    if(M >= 200 || M <= 195)
    {
        mMovement *= -1;
    }
    N+=mMovement;
    if(N >= 220 || N <= 215)
    {
        mMovement *= -1;
    }
    O+=mMovement;
    if(O >= 225 || O <= 230)
    {
        mMovement *= -1;
    }
    line(205,200,207,210);

    //shirt
    fill(198, 198, 198);
    rect(165,270,220,260);

    //arm
    line(320,400,325,500);

    //title and signature
    fill(46, 51, 58);
    textSize(23);
    text("Mikayla Miklos",10,490 );
  }
