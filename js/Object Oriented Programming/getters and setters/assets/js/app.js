let cl = console.log;

function Circle(radius){
    this.radius = radius; 
    // this.defaultLocation = {x:0, y:0};
    let defaultLocation = {x:0, y:0};
    // this.getDefaultLocation = function(){
    //     return defaultLocation;
    // }
    // this.setDefaultLocation = function(val){
    //     if(val.x && val.y){
    //         defaultLocation = val;
    //     }else{
    //         throw new Error('Provide proper Location');
    //     }
    // }
    let computeOptimumLocation = function(){
        cl(defaultLocation);
    }
    this.draw = function(){  
        cl('Draw');
        computeOptimumLocation();
    };
    Object.defineProperty(this, "dL", {
        get: function(){
            return defaultLocation;
        },
        set: function(val){
            if(val.x && val.y){
                defaultLocation = val;
            }else{
                throw new Error(`Invalid ocation`);
            }
        }
    })
}

let c1 = new Circle(10);
cl(c1);
// cl(c1.draw());
cl(c1.radius); //get radius
c1.radius = 100; // set radius
cl(c1.radius);
// let location1 = c1.getDefaultLocation();// can not get defaultLocation property if req method should be called
// cl(location1);
cl(c1.defaultLocation); // can not use ditrectly property on c1 instance

// c1.setDefaultLocation(false);// [Provide proper Location]

// c1.setDefaultLocation({x:20,y:30});
// cl(c1);
// cl(c1.getDefaultLocation());

cl(c1.dL); // get default location using dL as property i.e. Getters

c1.dL = {x:50, y:50};// set defaulting location using dL as property i.e. Setters

cl(c1.dL)