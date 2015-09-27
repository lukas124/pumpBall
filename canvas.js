var c             = document.getElementById("myCanvas");
var ctx           = c.getContext("2d");
var x             = 100;
<<<<<<< HEAD
var y             = 150;
var dx            = 2;
var dy            = 2;
var radius        = 20;
var palette_start = 300;
=======
var y             = 74;
var dx            = 2;
var dy            = 2;
var radius        = 20;
var palette_start = 100;
>>>>>>> bb6e4bedc2e6aa916ae46d676ad08394e47b30af
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
<<<<<<< HEAD
  ctx.clearRect(0, 0, c.width, c.height);
  drowCircle(x,y);
  drowSquere();
  colisionDetect();
  checkKey();

  x += dx;
  y += dy;
}

function drowRects(colide) {
  this.colide = colide;
  this.changeStatus = function () {
    this.colide = true;
  }
}

var array = new Array(3);
for (var i = 0; i < 3; i++) {
  array[i] = new Array(7);
  for (var j = 0; j < 6; j++) {
    array[i][j]= new drowRects(false);
  }
}
function game(){
=======
>>>>>>> bb6e4bedc2e6aa916ae46d676ad08394e47b30af
  ctx.clearRect(0, 0, c.width, c.height);
  drowCircle(x,y);
  drowSquere();
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 6; j++) {
      if (array[i][j].colide != true && x + radius >= (j*100 + 75) && x - radius <= (j*100 + 175) && y - radius == (i*40 + 40)) {
        dy = -dy
        array[i][j].changeStatus();
      } else if (array[i][j].colide != true && x + radius >= (j*100 + 75) && x - radius <= (j*100 + 175) && y - radius <= (i*40 + 40) && y - radius >= (i*40) ){
        dx = -dx
        array[i][j].changeStatus();
      }
      if(array[i][j].colide != true){
        ctx.beginPath();
        ctx.rect(j*100 + 75, i*40, 100, 40);
        ctx.fillStyle = '#555';
        ctx.fill();
      }
    }
  }

  colisionDetect();
  checkKey();

  x += dx;
  y += dy;
}

setInterval(game, 3);
