function NextLevel() {

  $(".select-level").css({"transform":"translateX(-"+window.innerWidth+"px)"});
  setTimeout(function () {
    $(".select-level").hide();
    levelNum++;
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
  LevelNumScreen();
}
function PreviousLevel() {
  $(".select-level").css({"transform":"translateX("+window.innerWidth+"px)"});
  setTimeout(function () {
    $(".select-level").hide();
    levelNum--;
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
  LevelNumScreen();
}

function LevelNumScreen() {
  var elements = document.getElementsByClassName("level-numer");

  for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = levelNum;
  }
}
