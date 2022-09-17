let cl = console.log;

function Circle(radius){
    this.radius = radius; 
    this.defaultCocation = {x:0, y:0};
    this.computeOptimumLocation = function(){
        cl(this.defaultCocation);
    }
    this.draw = function(){  
        cl('Draw');
    };
}

const c1 = new Circle(10);
cl(c1);

cl(c1.defaultCocation);
//Abstraction means Hide Details Show essentials

c1.defaultCocation = false;
cl(c1.defaultCocation);





