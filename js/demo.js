var o = {a: 1};

console.log(o)



var a = ["yo", "whadup", "?"];


console.log(a)


function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};

var g = new Graph();
g.addVertex(1,2,3,4)
console.log(g)

















