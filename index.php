<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title> PumpBall </title>
		<link rel="stylesheet" href="css/style.css" media="screen"  charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/animate.css">

		<!--- wow.js is responsible of animation of appearing elements --->
		<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	  <script type="text/javascript" src="js/wow.min.js"></script>
	  <script>
	    new WOW().init();
	  </script>
	</head>
	<body>
  <h1>Pump Ball</h1>
	<h3 id="scoreCounter">Score: <span id="score"></span></h3>
	<canvas id="myCanvas" width="750" height="500" class="wow slideInLeft" ></canvas>
	<div id="gameStart" class="wow slideInLeft">
		<h1>Welcome!</h1>
		<h3>To start game, just click "PLAY" button.</h3>
		<div class="steering">
			<h1> < </h1>
			<h1> > </h1>
			<h2>Move your paddle </h2>
		</div>
		<button type="button" name="Play" onclick="gameInit();">PLAY</button>
	</div>

	<div id="gameover">
  	<h2>Game Over!</h2>
		<h3>Your Score: <span id="finalScore_1"></span></h3>
		<h4>Don't give up! <br>Click "RESTART" button.</h3>
		<button type="button" onclick="restartGame();">RESTART</button>
  </div>
	<div id="youwon">
  	<h2>You Won!</h2>
		<h3>Your Score: <span id="finalScore_2"></span></h3>
		<button type="button" onclick="restartGame();">RESTART</button>
  </div>



	<h4>Find Us</h4>
  <ul>
    <li><a href="#"><img src="facebook2.png" alt="" /></a></li>
    <li><a href="#"><img src="linkedin1.png" alt="" /></a></li>
    <li><a href="https://github.com/lukas124/pumpBall"><img src="github17.png" alt="" /></a></li>
  </ul>
	<p>
		Copyright &copy; 2015 Szczepan, Lukasz &amp; Mariusz <br>All Rights Reserved.
	</p>

	<?php require('scripts_link.php'); ?>

	</body>
</html>
