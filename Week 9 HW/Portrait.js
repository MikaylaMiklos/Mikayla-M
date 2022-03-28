function setup() {
    createCanvas(500,500);
  }
  
  function draw() {
    background(94, 115, 132,);

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
    point(185,180);
    point(245,180);
    triangle(170,175,175,170,185,175);
    triangle(230,175,235,170,255,175);

    //eybrows
    line(165,150,180,150);
    line(225,150,255,150);

    //mouth and nose
    line(200,225,220,225);
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
    text("Unamused", 10,25);
  }
