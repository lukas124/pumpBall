var c             = document.getElementById("myCanvas");
var ctx           = c.getContext("2d");
var x             = 100;
var y             = 74;
var dx            = 2;
var dy            = 2;
var radius        = 20;
var palette_start = 100;
var palette_end   = palette_start + 170;

function drowCircle(x,y) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
}

function colisionDetect() {
  if ((x - radius) <= 0) {
    dx = -dx;
  }

  if ((x + radius) >= c.width) {
    dx = -dx;
  }

  if ((y - radius) <= 0) {
    dy = -dy;
  }

  if ((y + radius) > c.height) {
    document.getElementById("myCanvas").style.background = "#ddd";
    ctx.font = "30px Arial";
    ctx.fillStyle = 'green';
    ctx.fillText("Game Over!", 180, 100);
  }

  if ((y + radius) == 460  && x <= palette_end && x >= palette_start) {
    dy = -dy;
  }
}

function drowSquere() {
  ctx.beginPath();
  ctx.rect(palette_start, 460, 150, 15);
  ctx.fillStyle = '#333';
  ctx.fill();
  //ctx.strokeStyle = 'black';
  //ctx.stroke();
}

var keyState = {};
window.addEventListener('keydown',function(e) {
    keyState[e.keyCode || e.which] = true;
},true);

window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

function checkKey() {
  if ((keyState[37] || keyState[65]) && palette_start > 0){
    palette_start -= 3;
    palette_end -= 3;
   }
   if ((keyState[39] || keyState[68]) && (palette_start + 150 < c.width)){
     palette_start += 3;
     palette_end += 3;
   }
}

function game() {
  ctx.clearRect(0, 0, c.width, c.height);
  drowCircle(x,y);
  drowSquere();
  colisionDetect();
  checkKey();

  x += dx;
  y += dy;
}

setInterval(game, 3);
