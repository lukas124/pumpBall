//all function about game

function Game(){
  if (y - radius > c.height) {                            //Game Over Screen

    StopInterval('game-over','#e74c3c','finalScore_1');
    PointsCounter(false);

  } else if (blockNumber == blockCrushed) {                 //Winning Screen

    StopInterval('you-won','#3ee4c4','finalScore_2');
    PointsCounter(false);
    YourStage++;
    if (levelNum != 10) {
      levelNum++;
    }

  } else {                                                //Inside the game

    PointsCounter(true);
    ctx.clearRect(0, 0, c.width, c.height);
    mainBall.inGame(x,y);
    palette.inGame();
    level.inGame();
    ColisionDetect();
    CheckKey();
  }
  x += dx;
  y += dy;
}

function GameInit() {
  points = 0;
  palette_start = 300;
  blockCrushed = 0;
  blockNumber = 0;
  y = 150;
  x = Math.random() * 450 + 150;
  level.buildLevel(levelNum);
  Game();
  setTimeout(function(){var IntervalID = setInterval(Game, 5);},1000);
  document.getElementById('myCanvas').style.background = '#ecf0f1';
  $(".close").hide();
}
