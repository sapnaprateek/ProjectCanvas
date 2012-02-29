window.onload = function(){
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	context.lineWidth = 3; 
	context.strokeStyle = "#999999";
	for( var i=0; i<54; i=i+2)
	{
	context.beginPath();
	context.arc(canvas.width / 2, canvas.height / 2, 100, i/27 * Math.PI, (i+1)/27 * Math.PI, false);
	context.stroke();
	}
	for(var i = 0; i<=2; i = i+0.2){
	context.beginPath();
	context.moveTo((canvas.width / 2) + 80 + (i*80), (canvas.height / 2) - 60 - i*60);
	context.lineTo((canvas.width / 2) + 80 + ((i+0.1)*80), (canvas.height / 2 ) - 60 - ((i+0.1)*60));
	context.stroke();
	}
	
	context.beginPath();
	context.strokeStyle = "#00685b";
	context.arc(canvas.width / 2 + 264, canvas.height/2 - 198 , 20 , 0 , 2*Math.PI, false);
	context.stroke();
	
}