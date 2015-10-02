//all function about palette

function DrowSquere(start,width) {
  this.start = start;
  this.width = width;
  this.end = this.start + this.width + radius;
  this.inGame = function () {
    ctx.beginPath();
    ctx.rect(this.start, 460, this.width , 10);
    ctx.fillStyle = '#333';
    ctx.fill();
  }
}

var keyState = {};
window.addEventListener('keydown',function(e) {
    keyState[e.keyCode || e.which] = true;
},true);

window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

function CheckKey() {
   if ((keyState[37] || keyState[65]) && palette.start > 0){
    palette.start -= 4;
    palette.end -= 4;
   }
   if ((keyState[39] || keyState[68]) && (palette.start + 150 < c.width)){
     palette.start += 4;
     palette.end += 4;
   }
}
