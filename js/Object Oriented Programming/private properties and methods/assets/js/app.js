let cl = console.log;

function Circle(radius){
    this.radius = radius; 
    // this.defaultLocation = {x:0, y:0};
    let defaultLocation = {x:0, y:0};
    let computeOptimumLocation = function(){
        cl(defaultLocation);
    }
    this.draw = function(){  
        cl('Draw');
        computeOptimumLocation();
    };
}

let c1 = new Circle(10);
cl(c1);
c1.defaultLocation = false;
cl(c1.defaultCocation);
cl(c1.draw());