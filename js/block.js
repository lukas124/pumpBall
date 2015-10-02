//all function about blocks

function Block(j,i,colide,type) {
  this.type = type;                     //how many times you have to hit block to destroy
  this.colide = colide;
  this.hitCounter = 0;
  this.blockColor = '#7f8c8d';
  this.bonus = i*30 + 15;
  this.changeStatus = function () {
    this.colide = true;
  }
  this.blockStyle = function(styleNumber) {
    switch(styleNumber) {
      case 1:
        ctx.strokeStyle = '#3498db';
        ctx.fillStyle = '#2980b9';
        break;
      case 3:
        ctx.strokeStyle = '#34495e';
        ctx.fillStyle = '#2c3e50';
        break;
      case 2:
        ctx.strokeStyle = '#4B77BE';
        ctx.fillStyle = '#3A539B';
        break;
      default:
        ctx.strokeStyle = '#34495e';
        ctx.fillStyle = '#2c3e50';
    }
  }
  this.drowBlock = function (j,i) {
    if(this.colide == false){
      ctx.beginPath();
      ctx.rect(j*80 + 55, i*30, 76, 26);
      this.blockStyle(this.type - this.hitCounter);
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.fill();
    }
  }
  this.inGame = function () {
    if (this.colide != true && x >= (j*80 + 55) && x <= ((j+1)*80 + 55) && (y - radius == ((i+1)*30) || (y + radius == i*30))) {
      dy = -dy;
      points = points + combo;
      combo = combo * 2;
      this.hitCounter++;
    }

    if (this.colide != true && x + radius >= (j*80 + 55) && x - radius  <= ((j+1)*80 + 55) && y <= ((i+1)*30 ) && y > (i*30)){
      dx = -dx;
      points = points + combo;
      combo = combo * 2;
      this.hitCounter++;
    }

    if (this.colide != true &&            //when ball hits corner of the block
      ((dx > 0 && dy > 0 && Math.abs(x - (j*80 + 55)) < 10     && Math.abs(y - (i*30)) < 10)     ||
      (dx > 0 && dy < 0  && Math.abs(x - (j*80 + 55)) < 10     && Math.abs(y - ((i+1)*30)) < 10) ||
      (dx < 0 && dy > 0  && Math.abs(x - ((j+1)*80 + 55)) < 10 && Math.abs(y - (i*30)) < 10)     ||
      (dx < 0 && dy < 0  && Math.abs(x - ((j+1)*80 + 55)) < 10 && Math.abs(y - ((i+1)*30)) < 10))) {
      dx = -dx;
      dy = -dy;
      points = points + combo;
      combo = combo * 2;
      this.hitCounter++;
    }
    if(this.hitCounter == this.type){
      this.hitCounter = 0;
      this.changeStatus();
      blockCrushed++;
      this.rand = Math.floor((Math.random() * 10) + 1);
      this.bonusType = Math.floor((Math.random() * 2) + 1);
    }

    if(this.colide != true){
      this.drowBlock(j,i);
    } else {
      /*
      bonusRand(this.rand,j*80 + 95,this.bonus,this.bonusType);
      this.bonus++;
      */
    }
  }
}
/*
function bonusRand(random,bonusCoordinanceX,bonusCoordinanceY,bonusType){
  if(random == 3) {
  ctx.beginPath();
  ctx.arc(bonusCoordinanceX, bonusCoordinanceY , 10, 0, 2*Math.PI);
  ctx.fillStyle = "green";

  switch(bonusType) {
    case 1:
      ctx.fillStyle = "red";
      if ((bonusCoordinanceY + 10) >= 460  && bonusCoordinanceX  <= palette.end && bonusCoordinanceX  >= palette.start - radius) {
        palette.width = 100;
        random = 0;
      }
      break;
    case 2:
      ctx.fillStyle = "green";
      if ((bonusCoordinanceY + 10) >= 460  && bonusCoordinanceX <= palette.end && bonusCoordinanceX >= palette.start - radius) {
        palette.width = 200;
        random  = 0;
      }
      break;
    }

  ctx.fill();
  }
}
*/
function Levels() {
  this.buildLevel = function (stage) {
    switch (stage) {
      case 1:
        for (var i = 0; i < 4; i++) {
          blocksArray[i] = new Array(7);
          for (var j = 0; j < 8; j++) {
            blocksArray[i][j] = new Block(j,i,false,1);
            blockNumber++;
          }
        }
        break;
      case 2:
        for (var i = 0; i < 4; i++) {
          blocksArray[i] = new Array(7);
          for (var j = 0; j < 8; j++) {
            blocksArray[i][j] = new Block(j,i,false,Math.max(1,3-i));
            blockNumber++;
          }
        }
        break;
    }
  }
  this.inGame = function () {
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 8; j++) {
        blocksArray[i][j].inGame();
      }
    }
  }
}
