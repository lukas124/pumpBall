<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title> PumpBall </title>
		<link rel="stylesheet" href="css/style.css" media="screen"  charset="utf-8"></link>
	</head>
	<body>
  		<h1>Pump Ball</h1>
		<h3 id="scoreCounter">Score: <span id="score"></span></h3>
		<canvas id="myCanvas" width="750" height="500"></canvas>
		<button id="play" type="button" name="Play" onclick="GameInit();">PLAY</button>
  		
  		<div id="gameover">
  			<h2>Game Over!</h2>
			<h3>Your Score: <span id="finalScore_1"></span></h3>
			<button type="button" onclick="RestartGame();">RESTART</button>
  		</div>
	
		<div id="youwon">
  			<h2>You Won!</h2>
			<h3>Your Score: <span id="finalScore_2"></span></h3>
			<button type="button" onclick="RestartGame();">RESTART</button>
  		</div>

		<h4>Find Us</h4>
  		<ul>
    		<li><a href="#"><img src="images/facebook.png" alt="" /></a></li>
    		<li><a href="#"><img src="images/linkedin.png" alt="" /></a></li>
    		<li><a href="https://github.com/lukas124/pumpBall"><img src="images/github.png" alt="" /></a></li>
  		</ul>

		<p>
			Copyright &copy; 2015 Szczepan, Łukasz &amp; Mariusz.<br />All Rights Reserved.
		</p>

		<?php require_once('scripts_link.php'); ?>
	</body>
</html>
