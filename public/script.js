var w = 400;
var h = 200;
var padding = 2;
var dataset = [5, 10, 15, 20, 25];

var monthlySales = [
                    {"month":10, "sales":20},
                    {"month":20, "sales":14},
                    {"month":30, "sales":20},
                    {"month":40, "sales":21},
                    {"month":50, "sales":15},
                    {"month":60, "sales":22},
                    {"month":70, "sales":9},
                    {"month":80, "sales":6},
                    {"month":90, "sales":23},
                    {"month":100, "sales":7}
                    ];


// Bar Chart
var svg1 = d3.select("#barChart")
			.append("svg")
			.attr("width",w)
			.attr("height",h)
			
svg1.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
		.attr("x",function(d, i){
			return (i * (w / dataset.length));
		})
		.attr("y",function(d){
			return h - (d * 4);
		})
		.attr("width", w / dataset.length - padding)
		.attr("height", function(d) {
			return (d * 4);
		});


// Scatter Plot

var lineFun = d3.svg.line()
				.x(function(d) {return d.month * 2;})
				.y(function(d) {return h- (d.sales * 4);})
				.interpolate("linear");

var svg2 = d3.select("#scatterPlot")
			 .append("svg")
			 	.attr({
			 		"width":w,
			 		"height":h
			 		});

var viz = svg2.append("path")
			  .attr({
				  d: lineFun(monthlySales),
				  "stroke":"purple",
				  "stroke-width": 4,
				  "fill":"none"
			  });

svg2.selectAll("text")
.data(monthlySales)
.enter()
.append("text")
.text(function(d) {return d.sales; })
.attr({
	"text-anchor":"middle",
	x: function(d, i){return d.month * 2;},
	y: function(d) {return h - (d.sales * 4) + 14; },
	"font-size": "10px"
});
				