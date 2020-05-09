var ball,position,database;
var x,y;
var x1,y1,fr,h1,h2;

function setup(){
    database = firebase.database();

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
  
    var ballposition = database.ref('ball/position');
    ballposition.on("value",readPosition, showError);
}
var rects = [];
var size
function draw(){
    background("white");
  
    textSize(100);
    text("Draw Here",10,250) 
    textSize(25);
    text("Note: move your cursor slowly for",80,300) 
    text("For Using Eraser press '1' and ",80,360) 
    text("After using eraser choose a color ",80,390) 
    text("Press '2' to change color to yellow ",80,420) 
    text("Press '3' to change color to green ",80,450) 
   
    text("A good drawing",80,330)
 
    if(mouseIsPressed){
       
       rects = createSprite(mouseX,mouseY,10,10);
       rects.shapeColor = "yellow";
       if (keyCode === 49){
        rects.shapeColor = "white";    
       }
       if (keyCode === 50){
        rects.shapeColor = "yellow";    
       }
       if (keyCode === 51){
        rects.shapeColor = "green";    
       }


    }

    ball.x = mouseX;
    ball.y = mouseY;
    drawSprites();
}

function writePosition(x,y){
    
    database.ref('ball/position').set({
        'x':mouseX,
        'y':mouseY
    })
}
function readPosition(data){

    position = data.val();
    
    ball.x = position.x;
    ball.y = position.y;
}

function showError(){

    console.log("error in reading data");
}