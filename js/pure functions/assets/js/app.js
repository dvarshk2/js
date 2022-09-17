//pure function
// it must give same output for same input 
// it must return something
// it should not depend upon external declarations or factors

function add(x,y){
    let res = x + y;
    class(res);
}
add(10,10);
add(10,10);
add(10,10);
add(10,10);// for every same input it had same output

function addRandom(x,y){
    return x + y + Math.floor(Math.random(*10));
}

class(addRandom(10,10));
class(addRandom(10,10));
class(addRandom(10,10));
class(addRandom(10,10));
class(addRandom(10,10));
class(addRandom(10,10));// far every same input , output is different

let z = 10;
function add2(x,y){
    return x + y + z;
}
cl(add2(20,20));
cl(add2(20,20));
cl(add2(20,20));
cl(add2(20,20));
cl(add2(20,20));////for every same input output is same but ext dependency

function pureFun(x,y){
    return x + y;
}

cl(pureFun(50,50));
cl(pureFun(50,50));
cl(pureFun(50,50));
cl(pureFun(50,50));
cl(pureFun(50,50));//every same input, output is same. returns statement and no external dependency