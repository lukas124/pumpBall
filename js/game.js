//all function about game

function Game(){
  if (y - radius > c.height) {                            //Game Over Screen

    StopInterval('gameover','#e74c3c','finalScore_1');
    PointsCounter(false);

  } else if (blockNumber == blockCrushed) {                 //Winning Screen

    StopInterval('youwon','#3ee4c4','finalScore_2');
    PointsCounter(false);

  } else {                                                //Inside the game

    PointsCounter(true);
    ctx.clearRect(0, 0, c.width, c.height);
    mainBall.inGame(x,y);
    palette.inGame();

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 6; j++) {
        blocksArray[i][j].inGame();
      }
    }

    Collision();
    CheckKey();
    x += dx;
    y += dy;
  }
}

function GameInit() {
    points = 0;
    palette_start = 300;
    Game();
    setTimeout(function(){var IntervalID = setInterval(Game, 5);},1000);
    document.getElementById('myCanvas').style.background = '#ecf0f1';
    document.getElementById('play').style.display = 'none';
}

function RestartGame() {
    document.getElementById('gameover').style.display = 'none';
    document.getElementById('youwon').style.display = 'none';
    document.getElementById('myCanvas').style.background = '#ecf0f1';
    blockCrushed = 0;
    blockNumber = 0;
    y = 150;
    x = Math.random() * 450 + 150;
    BuildLevel();
    GameInit();
}
