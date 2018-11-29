const myCanvas = document.getElementById("my-canvas");

const ctx = myCanvas.getContext("2d");

let score  = 0;
let isOver = false;


function drawBackground (){
  ctx.fillStyle = "magenta";
  ctx.fillRect(0, 0, 1000, 500);

  ctx.fillStyle = "blue";
  ctx.font = "30PX Arial";
  ctx.fillText(`Score: ${score}` , 800, 50);


}



const fireballImg = new Image();
const supermanImg = new Image();

fireballImg.src = "images/fireball.png";
supermanImg.src = "images/superman.png";

let fireballX = 800;
let fireballY = 200;

let supermanX = 0;
let supermanY = 200;

// fireballImg.onload = function(){
// ctx.drawImage(fireballImg, fireballX, fireballY, 50, 50);
// }

// supermanImg.onload = function(){
//   ctx.drawImage(supermanImg, supermanX, supermanY, 150, 150);
//   }


document.onkeydown = function(event){
  switch(event.keyCode){
    case 37:
      supermanX -= 10;
      break;
    case 39:
      supermanX += 10;
      break;
    case 38:
      supermanY -= 10;
      break;
    case 40:
      supermanY += 10;
      break;
  }
}

function drawingLoop(){
  ctx.clearRect(0, 0, 1000, 500);

  drawBackground();

  fireballX -= 5;
  if(fireballX < -50){
    fireballX = 1000;
    fireballY = Math.floor(Math.random() * 500);
  }

  drawEverything();

  if(isOver === false){
    requestAnimationFrame(function(){
      drawingLoop();
    });
  }
}

function drawEverything(){
  ctx.drawImage(fireballImg, fireballX, fireballY, 60, 60);
  ctx.drawImage(supermanImg, supermanX, supermanY, 150, 150);

  if(checkCollision(supermanX, supermanY, fireballX, fireballY)){
    gameOver();
    
    // fireballX = 1000;
    // fireballY = Math.floor(Math.random() * 500);
    
    // score --;
  }

  if(fireballX === 0){
    score ++;
  }

}

function checkCollision(obj1x, obj1y, obj2x, obj2y){
  
    return obj1y + 150 >= obj2y
        && obj1y <= obj2y + 50
        &&obj1x + 150 >= obj2x
        &&obj1x <= obj2x + 50
}

function gameOver(){
  ctx.clearRect(0, 0, 1000, 500);
  drawBackground();

  const tiredSupermanImg = new Image();
  tiredSupermanImg.src = "./images/tiredSuperman.png";
    tiredSupermanImg.onload = function(){
        ctx.drawImage(tiredSupermanImg, 480, 300, 150, 150);
    }
  isOver = true;
  ctx.font = "bold 70px monospace";
  ctx.fillStyle = "red";
  ctx.fillText("Game Over", 400, 225)
}

drawingLoop();