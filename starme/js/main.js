var can;
var ctx;
var w;
var h;
 var me = new Image();
 var star = new Image();
 var lastTime;//上一次刷新的时间
 var deltaTime;//当前帧刷新时间与上次刷新的时间差

var num = 100;
 var stars = [];
 var life = 0;
 var fuck  = false;

function init()
{
 can = document.getElementById('canvas');
 ctx = can.getContext("2d");
 	w = can.width;
	h = can.height;
	document.addEventListener("mousemove", mousemove, false);
	me.src = "src/1.jpg";

	star.src = "src/star.png";
    
	for (var i = 0; i < num; i++) 
	{
		var obj = new starObj();
		stars.push(obj);
		stars[i].init();
	}
	lastTime = Date.now();
	 gameloop();
}
document.body.onload = init;

function gameloop()
{ 
   var now = Date.now();
   deltaTime = now - lastTime;
   lastTime = now ; 
   window.requestAnimFrame(gameloop);//两针之间的时间间隔并不是固定的
   drawBackgroud();
   drawMe();
   drawStars();
   aliveUpdate();
}

function drawBackgroud()
{
	ctx.fillStyle = "#393550";
	ctx.fillRect(0, 0, w, h);
}
function drawMe()
{
  ctx.drawImage(me,100,100,600,800);
}
function mousemove(e)
{
	if (e.offsetX||e.layerX)
	{
		var px = e.offsetX == undefined ? e.layerX : e.offsetX;
		var py = e.offsetY == undefined ? e.layerY : e.offsetY;
		if (px > 100  && px < 700 && py > 100 && py < 900)
		{
                fuck = true;
		}
		else 
		{
			fuck = false;

		}
		//console.log(fuck);
	}
}