canvas= document.getElementById("canvas_2");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= '	#0000FF' ;
ctx.lineWidth=5;
ctx.arc(250,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= '	#000000';
ctx.lineWidth=5;
ctx.arc(380,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= '	#FF0000';
ctx.lineWidth=5;
ctx.arc(510,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= '	#FFFF00';
ctx.lineWidth=5;
ctx.arc(315,260,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= '	#00FF00';
ctx.lineWidth=5;
ctx.arc(450,260,50,0,2*Math.PI);
ctx.stroke();