//all function about ball

function drowCircle(x,y) {
  this.x = x;
  this.y = y;
  this.inGame = function (x,y) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.fillStyle = "#3498db";
    ctx.fill();
  }
}
