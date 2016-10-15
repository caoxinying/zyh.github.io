var starObj = function()
{
	this.x;
	this.y;

	this.picNo;
	this.timer;
	this.xSpd;
	this.ySpd;
}
starObj.prototype.init= function()
{
	this.x = Math.random()* 600 + 100;//Math.random()返回{0,1}
	this.y = Math.random()* 800 + 100;
	this.picNo = Math.floor(Math.random() * 7);//Math.floor归一 0.3 0.9 得到的值都是0
	this.timer = 0;
	this.xSpd = Math.random() * 3 - 1.5;//随机上下的值
	this.ySpd = Math.random() * 3 - 1.5;
}

starObj.prototype.update = function()
{
	this.x += this.xSpd * deltaTime * 0.004;
	this.y += this.ySpd * deltaTime * 0.004;
	//如果 this.x超过范围 init
	//如果 this.y超过范围 init
	if (this.x<100|| this.x>700) 
	{
	   this.init();
	   return ;	
	}
	if (this.y<100|| this.y>900) 
	{
	   this.init();
	   return ;	
	}
	this.timer += deltaTime;
	if (this.timer>50) 
	{
		this.picNo += 1;
		this.picNo %= 7;
		this.timer = 0;
	}
	
	
}
starObj.prototype.draw = function()
{   //globalAlpha 全局透明度 
	//save()
	//只在这两者之间改变透明度
	//restore()
	ctx.save();
	ctx.globalAlpha = life;//0 - 1之间
    //drawImage(img,sx,sy(图片上的起点坐标)，swindjt,sheight(图片上要截取的宽度和高度)，x,y,width,height(canvas))
	ctx.drawImage(star,this.picNo * 7,0,7,7,this.x,this.y,7,7)
	ctx.restore();
}
function drawStars () 
{
	for (var i = 0; i < num; i++)
	{
		stars[i].update();
		stars[i].draw();
	}
}
function aliveUpdate()
{
	if (fuck)//ture
	{
	   life += 0.03 * deltaTime *0.05;
	   if (life>1)
	    {
	   		life = 1;
	   }
	}
	else
	{
		life -= 0.03 * deltaTime *0.05;
	   if (life<0)
	    {
	   		life = 0;
	   }
	}

	 
}