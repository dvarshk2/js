let cl = console.log;

function Shapes(){

}

Shapes.prototype.duplicate = function(){
    cl('Duplicate');
}
Shapes.prototype.draw = function(){
    cl('Draw');
}
function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(Shapes.prototype);
 Circle.prototype.constructor = Circle;
// Circle.prototype.draw = function(){
//     cl('Draw');
// }

// Circle.prototype.duplicate = function(){
//     cl('Duplicate');
// }

function Square(side){
    this.side = side;
}
Square.prototype = Object.create(Shapes.prototype);
// Square.prototype.duplicate = function(){
//     cl('Duplicate');
// }

let c = new Circle(10);
cl(c);

let s = new Square(10);
cl(s);