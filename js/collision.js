//all function about collision
/*
var rotation = false;
var licznik = 16;
var it = 0;
*/


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
  }

  if ((y + radius) == 460  && x <= palette.end && x >= palette.start - radius) {
    dy = -dy;
    points++;
    /*
    if(keyState[37] || keyState [39]){
      rotation=true;
    }
    */
  }
}
/*
function AddRotation() {
  if(rotation){
    if (dx > 0) {
      dx = licznik/2;
      if(it % 3 == 2){
        licznik = licznik/2;
      }
      if(dx < 2){
        dx = 2;
        rotation = false;
        licznik = 16;
      }
    }
    if (dx < 0) {
      dx = -licznik/2;
      if(it % 3 == 2){
        licznik = licznik/2;
      }
      if(dx > -2){
        dx = -2;
        rotation = false;
        licznik=16;
      }
    }
}
*/
