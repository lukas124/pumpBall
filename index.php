<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title> PumpBall </title>
		<link rel="stylesheet" href="css/style.css" media="screen"  charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/animate.css">

		<!--- wow.js is responsible of animation of appearing elements !-->
		<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	  <script type="text/javascript" src="js/wow.min.js"></script>
	  <script>
	    new WOW().init();
	  </script>
	</head>
	<body>

	<!---Title, Small score, Canvas !-->
  <h1>PUMP BALL</h1>
	<h3 id="scoreCounter">Score: <span id="score"></span></h3>
	<div class="canvas-size">
		<canvas id="myCanvas" width="750" height="500" class="wow zoomIn select-level" ></canvas>
	</div>

	<!---Main menu !-->
	<div id="main-menu" class="wow zoomIn close">
		<button type="button" name="Play" onclick="GameInit();">PLAY</button>
		<button type="button" name="Play" onclick="LevelSelect();">LEVEL SELECT</button>
		<button type="button" name="Play" onclick="ShowOnScreen('controlls','#17a689');">CONTROLLS</button>
	</div>

	<!---controlls !-->
	<div id="controlls" class="close">
		<h1>Controlls</h1>
		<h3>To start game, just click "PLAY" button.</h3>
		<div class="steering">
			<h1> < </h1>
			<h1> > </h1>
			<h2>Move your paddle </h2>
		</div>
		<button type="button" onclick="GameInit();">PLAY</button>
		<button type="button" onclick="ShowOnScreen('main-menu','#1abc9c');">MENU</button>
	</div>

	<!---gameover screen !-->
	<div id="game-over"  class="close" >
  	<h2>Game Over!</h2>
		<h3>Your Score: <span id="finalScore_1"></span></h3>
		<h4>Don't give up! <br>Click "RESTART" button.</h3>
		<button type="button" onclick="GameInit();">RESTART</button>
		<button type="button" onclick="ShowOnScreen('main-menu','#1abc9c');">MENU</button>
  </div>

	<!---win screen !-->
	<div id="you-won" class="close">
  	<h2>You Won!</h2>
		<h3>Your Score: <span id="finalScore_2"></span></h3>
		<button type="button" onclick="GameInit();">NEXT</button>
		<button type="button" onclick="ShowOnScreen('main-menu','#1abc9c');">MENU</button>
  </div>

	<!---level locked screen !-->
	<div class="level-locked select-level close">
		<div class="locker">
				<img src="images/lock27.png" alt="" />
		</div>
		<h1>Level <span class="level-numer"></span> locked</h1>
		<h3>To unlock, finish previous level</h3>
	</div>

	<!---level unlocked screen !-->
	<div class="level-unlocked select-level close">
		<h1>Level <span class="level-numer"></span></h1>
		<h3>Click "PLAY"</h3>
		<button type="button" name="Play" onclick="GameInit();">PLAY</button>
	</div>

	<!---levels selectors !-->
	<div class="next close"  onclick="NextLevel();">
		<img src="images/next21.png"/>
	</div>
	<div class="prev close"  onclick="PreviousLevel();">
		<img src="images/next21.png"/>
	</div>

	<!---Footer !-->
	<h4>Find Us</h4>
  <ul>
    <li><a href="#"><img src="images/facebook2.png" alt="" /></a></li>
    <li><a href="#"><img src="images/linkedin1.png" alt="" /></a></li>
    <li><a href="https://github.com/lukas124/pumpBall"><img src="images/github17.png" alt="" /></a></li>
  </ul>
	<p>
		Copyright &copy; 2015 Szczepan, Lukasz &amp; Mariusz <br>All Rights Reserved.
	</p>

	<?php require('scripts_link.php'); ?>

	</body>
</html>
