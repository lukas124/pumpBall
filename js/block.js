//all function about blocks

function block(j,i,colide,type) {
  this.type = type;                     //how many times you have to hit block to destroy
  this.colide = colide;
  this.hitCounter = 0;
  this.blockColor = '#7f8c8d';
  this.changeStatus = function () {
    this.colide = true;
  }
  this.blockStyle = function(styleNumber) {
    switch(styleNumber) {
      case 1:
        ctx.strokeStyle = '#3498db';
        ctx.fillStyle = '#2980b9';
        break;
      case 2:
        ctx.strokeStyle = '#34495e';
        ctx.fillStyle = '#2c3e50';
        break;
      case 3:
        ctx.strokeStyle = '#e67e22';
        ctx.fillStyle = '#d35400';
        break;
      default:
        ctx.strokeStyle = '#34495e';
        ctx.fillStyle = '#2c3e50';
    }
  }
  this.drowBlock = function (j,i) {
    if(this.colide == false){
      ctx.beginPath();
      ctx.rect(j*100 + 75, i*40, 96, 36);
      this.blockStyle(this.type - this.hitCounter);
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.fill();
    }
  }
  this.inGame = function () {
    if (this.colide != true && x >= (j*100 + 75) && x <= (j*100 + 175) && (y - radius == (i*40 + 40) || (y + radius == i*40))) {
      dy = -dy;
      points++;
      this.hitCounter++;
    }

    if (this.colide != true && x + radius >= (j*100 + 75) && x - radius  <= ((j+1)*100 + 75) && y <= ((i+1)*40 ) && y > (i*40)){
      dx = -dx;
      points++;
      this.hitCounter++;
    }

    if (this.colide != true &&            //when ball hits corner of the block
      ((dx > 0 && dy > 0 && Math.abs(x - (j*100 + 75)) < 14     && Math.abs(y - (i*40)) < 14)     ||
      (dx > 0 && dy < 0  && Math.abs(x - (j*100 + 75)) < 14     && Math.abs(y - ((i+1)*40)) < 14) ||
      (dx < 0 && dy > 0  && Math.abs(x - ((j+1)*100 + 75)) < 14 && Math.abs(y - (i*40)) < 14)     ||
      (dx < 0 && dy < 0  && Math.abs(x - ((j+1)*100 + 75)) < 14 && Math.abs(y - ((i+1)*40)) < 14))) {
      dx = -dx;
      dy = -dy;
      points++;
      this.hitCounter++;
    }
    if(this.hitCounter == this.type){
      this.hitCounter = 0;
      this.changeStatus();
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
      blocksArray[i][j] = new block(j,i,false,3-i);
      blockNumber++;
    }
  }
}
