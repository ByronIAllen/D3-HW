// Animated D3 Scatter Plot

// A little housekeeping to keep things neat
// =======================================
// Setting aside the graph size
var width = parseInt(d3.select("#scatter").style("width"));
var height = width - width / 4;

// Spacing
var margin = 20;
var labelArea = 110;
var tPadB = 40;
var tPadL = 40;

// Create the SVG for the graph
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "chart");

// Set radius on the dots for the graph
var circRadius;
function crGet() {
    if (width <= 530) {
        circRadius = 5;
    } else {
        circRadius = 10;
    }
};
crGet();

// Labeling Axes
// ==============================
// X-axis 
svg.append("g").attr("class", "xText");
var xText = d3.select(".xText");
function xTextRefresh() {
    xText.attr("transform", 
        "translate(" + ((width - labelArea) / 2 + labelArea) +
        ", " + (height - margin - tPadB) + ")"
    );
};
xTextRefresh();

xText.append("text")
    .attr("y", -26)
    .attr("data-name", "poverty")
    .attr("data-axis", "x")
    .attr("class", "aText active x")
    .text("In Poverty (%)");

xText.append("text")
    .attr("y", 0)
    .attr("data-name", "age")
    .attr("data-axis", "x")
    .attr("class", "aText active x")
    .text("Age (Median)");

xText.append("text")
    .attr("y", 26)
    .attr("data-name", "income")
    .attr("data-axis", "x")
    .attr("class", "aText active x")
    .text("Household Income (Median)");

var leftTextX = margin + tPadL;
var leftTextY = (height + labelArea) / 2 - labelArea;

// Y-axis
svg.append("g").attr("class", "yText");
var yText = d3.select(".yText");
function yTextRefresh() {
    yText.attr("transform", "translate" + leftTextX + ")rotate(-90)");
};
yTextRefresh();

yText.append("text")
    .attr("y", -26)
    .attr("data-name", "obesity")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("Obese (%)");

yText.append("text")
    .attr("y", 0)
    .attr("data-name", "obesity")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("Smokes (%)");

yText.append("text")
    .attr("y", 26)
    .attr("data-name", "healthcare")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("Lacks Healthcare (%)");

// Bring in the CSV
// ==========================
d3.csv("assets/data/data.csv"),then(function(data) {
    visualize(data);
});

// 