let cl = console.log;

let abc =['Ram','shyam','suraj','jitendra'];

function swapArray(arr){
    cl(arr);
    let a= arr.pop();
    arr.push(arr.shift());
    arr.unshift(a);
    cl(arr);
}

swapArray(abc);

let num =[10,12,18,25,43,67];
swapArray(num);