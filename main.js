function preload()
{
}

function setup(){
    canvas = createCanvas(700,550);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,300,265,100,80);

    fill("green")
    rect(50,35,600,30)
    rect(50,485,600,30)
    rect(635,35,30,450)
    rect(35,35,30,450)
    
      
      fill("red") 
    circle(50,50,80,80)
    circle(650,50,80,80)
    circle(650,500,80,80)
    circle(50,500,80,80)
    
}

function take_snapshot(){
    save('student_name.png')
}
