var c             = document.getElementById("myCanvas");
var ctx           = c.getContext("2d");
var x             = Math.random() * 450 + 150;
var y             = 150;
var dx            = 2;
var dy            = 2;
var radius        = 20;
var palette_start = 300;
var points;
var blockNumber = 0;
var blockCrushed = 0;
var blocksArray = new Array(3);


function stopInterval(display,color,pointsPlace){
  ctx.clearRect(0, 0, c.width, c.height);
  document.getElementById('myCanvas').style.background = color;
  document.getElementById(display).style.display = 'block';
  document.getElementById(pointsPlace).innerHTML = points;
  for(i=0; i<100; i++)
    {
      clearInterval(i);
    }
}

function pointsCounter(show) {
  if (show) {
    document.getElementById('score').innerHTML = points;
    document.getElementById('scoreCounter').style.display = 'block';
  } else {
    document.getElementById('scoreCounter').style.display = 'none';
  }
}
