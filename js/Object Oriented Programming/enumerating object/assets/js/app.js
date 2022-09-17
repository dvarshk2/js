let cl = console.log;

function Circle(radius){
    this.radius = radius; // type of radius is property
    this.draw = function(){  // type of draw is method
        cl('Draw');
    };
}

const c1 = new Circle(10);
cl(c1);

for(let key in c1){
    // cl(key, c1.key); //it will not work
    cl(key, c1[key]); // will get keys available in c1 instance
}

// to get only property not function or method 
for(let key in c1){
    if( typeof c1[key] !== 'function'){
        cl(key, c1[key]);
    }
}

// method to get keys from object

let keys = Object.keys(c1); //here Object is constructor function
cl(keys); // this method returns all keys of selected object in the form of array

if('radius' in c1){
    cl('We have Radius!!');
}

if('diameter' in c1){
    cl('we have diameter');
}else{
    cl('we don\'t have diameter');
}









