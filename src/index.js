import "./styles.css";
import * as d3 from "d3";

const poly1path = d3.select(".poly1path");
console.log(poly1path);
const poly2path = d3.select(".poly2path");
const poly3path = d3.select(".poly3path");

console.log(poly1path.node().getTotalLength());
console.log(poly2path.node().getTotalLength());
console.log(poly3path.node().getTotalLength());
const poly1len = poly1path.node().getTotalLength();
const poly2len = poly2path.node().getTotalLength();
const poly3len = poly3path.node().getTotalLength();

poly1path
  .attr("stroke-dasharray", poly1len + "px")
  .attr("stroke", "#31e89f")
  .attr("stroke-width", "5px")
  .attr("stroke-dashoffset", poly1len + "px")
  .transition()
  .duration(5000)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset", 0 + "px");

poly1path
  .attr("fill", "transparent")
  .attr("opacity", 0.5)
  .transition()
  .delay(5000)
  .duration(4000)
  .ease(d3.easeBounceInOut)
  .attr("fill", "#31e89f");

poly2path
  .attr("stroke-dasharray", poly2len + "px")
  .attr("stroke", "#31c6e8")
  .attr("stroke-width", "5px")
  .attr("stroke-dashoffset", poly2len + "px")
  .transition()
  .delay(1000)
  .duration(5000)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset", 0 + "px");

poly2path
  .attr("fill", "transparent")
  .attr("opacity", 0.5)
  .transition()
  .delay(6000)
  .duration(3000)
  .ease(d3.easeBounceInOut)
  .attr("fill", "#31c6e8");

poly3path
  .attr("stroke-dasharray", poly3len + "px")
  .attr("stroke", "#31e8e8")
  .attr("stroke-width", "5px")
  .attr("stroke-dashoffset", poly3len + "px")
  .transition()
  .delay(2000)
  .duration(5000)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset", 0 + "px");

poly3path
  .attr("fill", "transparent")
  .transition()
  .delay(7000)
  .duration(2000)
  .ease(d3.easeBounceInOut)
  .attr("fill", "#31e8e8");

var logoText = d3
  .select(".logotext")
  .selectAll("path")
  .attr("stroke-dasharray", function(d, i) {
    console.log("node ", i, " is ", this.getTotalLength());
    return this.getTotalLength() + "px";
  })
  .attr("stroke-dashoffset", function(d, i) {
    console.log("node ", i, " is ", d);
    return this.getTotalLength() + "px";
  })
  .attr("stroke", "#FFFFFF")
  .attr("fill", "transparent")
  .transition()
  .delay(function(d, i) {
    return i * 50;
  })
  .duration(5000)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset", "0px");

logoText
  .attr("fill", "transparent")
  .transition()
  .delay(function(d, i) {
    return i * 50;
  })
  .duration(1000)
  .ease(d3.easeBounceInOut)
  .attr("fill", "#FFFFFF");
