var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = "#2077bd";
ctx.lineWidth = 20;

//void ctx.strokeRect(x, y, width, height);
ctx.strokeRect(10, 10, 780, 780);

ctx.fillStyle = "#565555";
ctx.fillRect(20, 20, 760, 760);

ctx.beginPath();
ctx.moveTo(400, 20);
ctx.lineTo(400, 400);
ctx.stroke();
ctx.moveTo(20, 400);
ctx.lineTo(780, 400);
ctx.stroke();
ctx.closePath();
// void ctx.fillRect(x, y, width, height);
ctx.fillStyle = "white";
ctx.fillRect(20, 20, 30, 30);
ctx.fillRect(20, 750, 30, 30);
ctx.fillRect(750, 20, 30, 30);
ctx.fillRect(750, 750, 30, 30);
//左上角
ctx.fillRect(50, 50, 40, 40);
ctx.fillRect(95, 50, 15, 40);
ctx.fillRect(50, 95, 40, 15);
ctx.fillRect(95, 95, 15, 15);
//右上角
ctx.fillRect(710, 50, 40, 40);
ctx.fillRect(690, 50, 15, 40);
ctx.fillRect(690, 95, 15, 15);
ctx.fillRect(710, 95, 40, 15);
//左下角
ctx.fillRect(50, 690, 40, 15);
ctx.fillRect(50, 710, 40, 40);
ctx.fillRect(95, 690, 15, 15);
ctx.fillRect(95, 710, 15, 40);
//右下角
ctx.fillRect(690, 690, 15, 15);
ctx.fillRect(710, 690, 40, 15);
ctx.fillRect(690, 710, 15, 40);
ctx.fillRect(710, 710, 40, 40);
//左上角框框
ctx.fillRect(110, 110, 90, 13);
ctx.fillRect(110, 123, 13, 77);
ctx.fillRect(123, 188, 65, 12);
ctx.fillRect(188, 123, 12, 77);

ctx.fillRect(128, 128, 11, 55);
ctx.fillRect(174, 128, 9, 55);
ctx.fillRect(139, 128, 35, 11);
ctx.fillRect(139, 174, 35, 9);

ctx.fillRect(144, 144, 24, 25);
//右上角框框
ctx.fillRect(600, 110, 90, 13);
ctx.fillRect(600, 123, 13, 77);
ctx.fillRect(613, 188, 65, 12);
ctx.fillRect(678, 123, 12, 77);

ctx.fillRect(618, 128, 11, 55);
ctx.fillRect(664, 128, 9, 55);
ctx.fillRect(629, 128, 35, 11);
ctx.fillRect(629, 174, 35, 9);

ctx.fillRect(634, 144, 25, 25);
//左下角框框
ctx.fillRect(110, 600, 90, 12);
ctx.fillRect(110, 678, 90, 12);
ctx.fillRect(110, 612, 13, 66);
ctx.fillRect(188, 612, 12, 66);

ctx.fillRect(128, 618, 11, 55);
ctx.fillRect(174, 618, 9, 55);
ctx.fillRect(139, 618, 35, 11);
ctx.fillRect(139, 664, 35, 9);

ctx.fillRect(144, 634, 25, 25);
//右下角框框
ctx.fillRect(600, 600, 90, 13);
ctx.fillRect(600, 678, 90, 12);
ctx.fillRect(600, 613, 13, 65);
ctx.fillRect(678, 613, 12, 65);

ctx.fillRect(618, 618, 11, 55);
ctx.fillRect(664, 618, 9, 55);
ctx.fillRect(629, 618, 35, 11);
ctx.fillRect(629, 664, 35, 9);

ctx.fillRect(634, 634, 25, 25);

//logo左上
ctx.fillRect(200, 200, 120, 9);
ctx.fillRect(200, 309, 120, 11);
ctx.fillRect(200, 209, 10, 100);
ctx.fillRect(310, 209, 10, 100);

ctx.strokeStyle = "white";
ctx.lineWidth = 4;

//void ctx.strokeRect(x, y, width, height);
ctx.strokeRect(234, 233, 54, 54);
ctx.beginPath();
ctx.moveTo(210, 262);
ctx.lineTo(310, 262);
ctx.stroke();
ctx.moveTo(260, 209);
ctx.lineTo(260, 310);
ctx.stroke();
ctx.closePath();

//logo右上
ctx.fillRect(480, 200, 120, 10);
ctx.fillRect(480, 310, 120, 10);
ctx.fillRect(480, 210, 11, 100);
ctx.fillRect(591, 210, 9, 100);

ctx.fillRect(496, 215, 25, 55);
ctx.fillRect(528, 215, 25, 55);
ctx.fillRect(560, 215, 25, 55);

ctx.fillRect(496, 275, 90, 30);

//logo左下
ctx.lineWidth = 10;
ctx.strokeRect(205, 485, 110, 110);

ctx.fillRect(220, 500, 50, 35);
ctx.fillRect(220, 545, 50, 35);
ctx.fillRect(280, 490, 10, 100);

//logo右下
ctx.fillRect(480, 480, 120, 11);
ctx.fillRect(480, 591, 120, 9);
ctx.fillRect(480, 491, 10, 100);
ctx.fillRect(590, 491, 10, 100);

ctx.fillRect(525, 496, 30, 30);
ctx.fillRect(495, 526, 30, 30);
ctx.fillRect(555, 526, 30, 31);
ctx.fillRect(525, 556, 30, 30);
//logo正下方
ctx.fillRect(370, 560, 60, 60);
ctx.fillStyle = "#2077bd";
ctx.fillRect(371, 561, 58, 58);

ctx.fillStyle = "white";
ctx.fillRect(335, 595, 60, 60);
ctx.fillStyle = "#2077bd";
ctx.fillRect(336, 596, 58, 58);

ctx.fillStyle = "white";
ctx.fillRect(405, 595, 60, 60);
ctx.fillStyle = "#2077bd";
ctx.fillRect(406, 596, 58, 58);

ctx.fillStyle = "white";
ctx.fillRect(300, 630, 60, 60);
ctx.fillStyle = "#2077bd";
ctx.fillRect(301, 631, 58, 58);

ctx.fillStyle = "white";
ctx.fillRect(370, 630, 60, 60);
ctx.fillStyle = "#2077bd";
ctx.fillRect(371, 631, 58, 58);

ctx.fillStyle = "white";
ctx.fillRect(440, 630, 60, 60);
ctx.fillStyle = "#2077bd";
ctx.fillRect(441, 631, 58, 58);

ctx.fillStyle = "white";
ctx.fillRect(335, 665, 60, 60);
ctx.fillStyle = "#2077bd";
ctx.fillRect(336, 666, 58, 58);

ctx.fillStyle = "white";
ctx.fillRect(405, 665, 60, 60);
ctx.fillStyle = "#2077bd";
ctx.fillRect(406, 666, 58, 58);

ctx.fillStyle = "white";
ctx.fillRect(370, 700, 60, 60);
ctx.fillStyle = "#2077bd";
ctx.fillRect(371, 701, 58, 58);

//加载logo
var logo = new Image();
logo.src = "logo.jpg";
logo.onload = function  () {
	ctx.drawImage(logo, 320, 320, 160, 160);
}
