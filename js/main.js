var c             = document.getElementById("myCanvas");
var ctx           = c.getContext("2d");
var x             = Math.random() * 450 + 150;
var y             = 150;
var dx            = 2;
var dy            = 2;
var radius        = 20;
var palette_start = 300;
var blockNumber   = 0;
var blockCrushed  = 0;
var blocksArray   = new Array(3);
var points        = 0;

function StopInterval(display,color,pointsPlace){
  ctx.clearRect(0, 0, c.width, c.height);
  document.getElementById('myCanvas').style.background = color;
<<<<<<< HEAD
  document.getElementById(display).style.display       = 'block';
  document.getElementById(pointsPlace).innerHTML       = points;
  
=======
  document.getElementById(display).style.display = 'block';
  document.getElementById(pointsPlace).innerHTML = points;
  $("#"+display).addClass('animated zoomIn');
>>>>>>> 2bdaa61b67dbfb2280ca3c9d7b242e35711271d8
  for(i=0; i<100; i++)
    {
      clearInterval(i);
    }
}

function PointsCounter(show) {
  if (show) {
    document.getElementById('score').innerHTML = points;
    document.getElementById('scoreCounter').style.display = 'block';
  } else {
    document.getElementById('scoreCounter').style.display = 'none';
  }
}
