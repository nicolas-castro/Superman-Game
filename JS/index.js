const myCanvas = document.getElementById("my-canvas");

const ctx = myCanvas.getContext("2d");

function drawBackground (){
  ctx.fillStyle = "magenta";
  ctx.fillRect(0, 0, 1000, 500);

  ctx.fillStyle = "blue";
  ctx.font = "30PX Arial";
  ctx.fillText("Nicolas:" , 800, 50);


}



const fireballImg = new Image();
const supermanImg = new Image();

fireballImg.src = "./images/fireball.png";
supermanImg.src = "./images/superman.png";

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

  ctx.drawImage(fireballImg, fireballX, fireballY, 50, 50);


  ctx.drawImage(supermanImg, supermanX, supermanY, 150, 150);

  requestAnimationFrame(function(){
    drawingLoop();
  });

}

drawingLoop();