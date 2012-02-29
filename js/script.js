window.onload = function(){
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	context.lineWidth = 5; 
	context.strokeStyle = "#999999";
	//context.arc(canvas.width / 2, canvas.height / 2 + 40, 100, 0 * Math.PI, 1/12 * Math.PI, false);
	//context.stroke();
	for( var i=0; i<36; i=i+2)
	{
	context.beginPath();
	context.arc(canvas.width / 2, canvas.height / 2 + 40, 100, i/18 * Math.PI, (i+1)/18 * Math.PI, false);
	context.stroke();
	}
	
	
}