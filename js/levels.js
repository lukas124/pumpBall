function NextLevel() {
  $(".select-level").css({"transform":"translateX(-"+window.innerWidth+"px)"});
  setTimeout(function () {
    $(".select-level").hide();
    levelNum = Math.min(10,levelNum + 1);
  },310);
  setTimeout(function () {
    $(".select-level").css({"transform":"translateX("+window.innerWidth+"px)"});
  },320);
  setTimeout(function () {
    LevelSelect();
    $('#myCanvas').show();
  },630);
  setTimeout(function () {
    $(".select-level").css({"transform":"translateX(0)"});
  },640);
  setTimeout(LockerAnimationLeft,750);
  LevelNumScreen();
}
function PreviousLevel() {
  $(".select-level").css({"transform":"translateX("+window.innerWidth+"px)"});
  setTimeout(function () {
    $(".select-level").hide();
    levelNum = Math.max(1,levelNum - 1);
  },310);
  setTimeout(function () {
    $(".select-level").css({"transform":"translateX(-"+window.innerWidth+"px)"});
  },320);
  setTimeout(function () {
    LevelSelect();
    $('#myCanvas').show();
  },630);
  setTimeout(function () {
    $(".select-level").css({"transform":"translateX(0)"});
  },640);
  setTimeout(LockerAnimationRight,750);
  LevelNumScreen();
}

function LevelNumScreen() {
  var elements = document.getElementsByClassName("level-numer");

  for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = levelNum;
  }
}
function LockerAnimationLeft() {
  $(".locker").css({"transform":"rotate(30deg)"})
  setTimeout(function () {
    $(".locker").css({"transform":"rotate(-15deg)"});
  },250);
  setTimeout(function () {
    $(".locker").css({"transform":"rotate(5deg)"});
  },500);
  setTimeout(function () {
    $(".locker").css({"transform":"rotate(0deg)"});
  },700);
}
function LockerAnimationRight() {
  $(".locker").css({"transform":"rotate(-30deg)"})
  setTimeout(function () {
    $(".locker").css({"transform":"rotate(15deg)"});
  },250);
  setTimeout(function () {
    $(".locker").css({"transform":"rotate(-5deg)"});
  },500);
  setTimeout(function () {
    $(".locker").css({"transform":"rotate(0deg)"});
  },700);
}

function LevelSelect() {
  $(".close").hide();
  if(levelNum > 1){
      $(".prev").show();
  }
  if(levelNum < 10){
      $(".next").show();
  }
  $("#myCanvas").css({"background":"#ecf0f1"})
  if(YourStage >= levelNum) {
    $(".level-unlocked").show();
  } else {
    $(".level-locked").show();
  }
  LevelNumScreen();
  level.buildLevel(levelNum);
  y = 150;
  Game();
  $("#scoreCounter").hide();
}
