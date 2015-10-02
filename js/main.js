var c             = document.getElementById("myCanvas");
var ctx           = c.getContext("2d");
var x             = Math.random() * 450 + 150;
var y             = 150;
var dx            = 2;
var dy            = 2;
var radius        = 14;
var palette_start = 300;
var points;
var combo = 1;
var blockNumber = 0;
var blockCrushed = 0;
var blocksArray = new Array(3);
var levelNum = 1;
var YourStage = 2;


function StopInterval(display,color,pointsPlace){
  ctx.clearRect(0, 0, c.width, c.height);
  document.getElementById('myCanvas').style.background = color;
  document.getElementById(display).style.display = 'block';
  document.getElementById(pointsPlace).innerHTML = points;
  $("#"+display).addClass('animated zoomIn');
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

function Controlls(){
  $(".close").hide();
  document.getElementById('controlls').style.display = 'block';
  document.getElementById('myCanvas').style.background = '#17a689';
}
