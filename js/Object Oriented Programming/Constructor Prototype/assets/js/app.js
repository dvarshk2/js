let cl = console.log;

function Circle(rad){
    this.radius = rad;
}

let circle = new Circle(10);

let myobj = Object.getPrototypeOf(circle);

let circle2 = new Circle(100);
let myobj2 = Object.getPrototypeOf(circle2);

cl(myobj === myobj2);

function Square(side){
    this.side = side;
}

let sqr = new Square(20);

let sqrObj = Object.getPrototypeOf(sqr);

cl(myobj === sqrObj);

cl(Object.getPrototypeOf(sqrObj) === Object.getPrototypeOf(myobj));