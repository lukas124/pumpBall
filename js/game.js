//all function about game

function game(){
  if (y - radius > c.height) {                            //Game Over Screen

    stopInterval('gameover','#e74c3c','finalScore_1');
    pointsCounter(false);

  } else if (blockNumber == blockCrushed) {                 //Winning Screen

    stopInterval('youwon','#3ee4c4','finalScore_2');
    pointsCounter(false);

  } else {                                                //Inside the game

    pointsCounter(true);
    ctx.clearRect(0, 0, c.width, c.height);
    mainBall.inGame(x,y);
    palette.inGame();

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 6; j++) {
        blocksArray[i][j].inGame();
      }
    }

    colisionDetect();
    checkKey();
    x += dx;
    y += dy;
  }
}

function gameInit() {
    points = 0;
    palette_start = 300;
    game();
    setTimeout(function(){var IntervalID = setInterval(game, 5);},1000);
    document.getElementById('myCanvas').style.background = '#ecf0f1';
    document.getElementById('play').style.display = 'none';
}

function restartGame() {
  document.getElementById('gameover').style.display = 'none';
  document.getElementById('youwon').style.display = 'none';
  document.getElementById('myCanvas').style.background = '#ecf0f1';
  blockCrushed = 0;
  y = 150;
  x = Math.random() * 450 + 150;
  buildLevel();
  gameInit();
}
