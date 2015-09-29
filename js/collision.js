//all function about collision

function Collision() {
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
  }
}
