//all function about blocks

function block(j,i,colide) {
  this.colide = colide;
  this.changeStatus = function () {
    this.colide = true;
  }
  this.drowBlock = function (j,i) {
    if(this.colide == false){
      ctx.beginPath();
      ctx.rect(j*100 + 75, i*40, 96, 36);
      ctx.strokeStyle = '#34495e';
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.fillStyle = '#2c3e50';
      ctx.fill();
    }
  }
  this.inGame = function () {
    if (this.colide != true && x >= (j*100 + 75) && x <= (j*100 + 175) && (y - radius == (i*40 + 40) || (y + radius == i*40))) {
      dy = -dy
      this.changeStatus();
      points++;
      blockCrushed++;
    }

    if (this.colide != true && x + radius >= (j*100 + 75) && x - radius  <= (j*100 + 175) && y  <= ((i+1)*40 ) && y >= (i*40)){
      dx = -dx
      this.changeStatus();
      points++;
      blockCrushed++;
    }

    if(this.colide != true){
      this.drowBlock(j,i);
    }
  }
}

function buildLevel() {
  for (var i = 0; i < 3; i++) {
    blocksArray[i] = new Array(7);
    for (var j = 0; j < 6; j++) {
      blocksArray[i][j] = new block(j,i,false);
      blockNumber++;
    }
  }
}
