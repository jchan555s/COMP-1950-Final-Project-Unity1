
function createCanvas(divName) {
	
	var div = document.getElementById(divName);
	var canvas = document.createElement('canvas');
	div.appendChild(canvas);
	if (typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}	
	var ctx = canvas.getContext("2d");
	return ctx;
}

var ctx = createCanvas("graphDiv1");

var graph = new BarGraph(ctx);
graph.maxValue = 30;
graph.margin = 2;
graph.colors = ["#49a0d8", "#d353a0", "#ffc527", "#df4c27"];
graph.xAxisLabelArr = ["A)", "B)", "C)", "D)"];
setInterval(function () {
	graph.update([Math.random() * 30, Math.random() * 30, Math.random() * 30, Math.random() * 30]);
}, 1000);


