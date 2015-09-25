<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title> Gra </title>
		<style type="text/css">
			#myCanvas{
				background: #DDD;

			}
		</style>
	</head>
	<canvas id="myCanvas" width="350" height="500">
	</canvas>
	<body>
			<script type="text/javascript">
				var c=document.getElementById("myCanvas");
				var ctx=c.getContext("2d");
				var x = 100;
				var y = 75;
				var dx = 6;
				var dy = 6;
				var radius = 20;
				var palette_start = 100;
				var palette_end = palette_start + 150;

				function drowCircle(x,y){
					ctx.beginPath();
					ctx.arc(x,y,radius,0,2*Math.PI);
					ctx.stroke();
					ctx.fillStyle="red";
					ctx.fill();
				}

				function colisionDetect() {
					if ((x - radius) <= 0) {
						dx = -dx;
					}
					if ((x + radius) >= c.width) {
						dx = -dx;
					}
					if ((y - radius) <= 0) {
						dy = -dy;
					}
					if ((y + radius) >=c.height) {
						document.getElementById("myCanvas").style.background = "red";
						ctx.font = "30px Arial";
						ctx.fillStyle = 'white';
						ctx.fillText("Game Over",10,50);
					}
					if ((y + radius) >= 460 && x <= palette_end && x >= palette_start) {
						dy = -dy;
					}
				}
				function drowSquere() {
					ctx.beginPath();
		      ctx.rect(palette_start, 460, 150, 40);
		      ctx.fillStyle = 'yellow';
		      ctx.fill();
					//ctx.strokeStyle = 'black';
		 			ctx.stroke();
				}

				document.addEventListener('click', checkKey);

				function checkKey(e) {

				    //e = e || window.event;

				    if (e.keyCode == '38') {
				        // up arrow
				    }
				    else if (e.keyCode == '40') {
				        // down arrow
				    }
				    else if (e.keyCode == '37' && palette_start > 0) {
				       palette_start -= 20;
				    }
				    else if (e.keyCode == '39' && (palette_start + 150 < c.width)) {
				       palette_start += 20;
				    }

				}
				function game(){
					ctx.clearRect(0, 0, c.width, c.height);
					drowCircle(x,y);
					drowSquere();
					colisionDetect();

					x += dx;
					y += dy;
				}

				setInterval(game, 10);

				//document.addEventListener("click", controlls);
			</script>
	</body>
</html>
