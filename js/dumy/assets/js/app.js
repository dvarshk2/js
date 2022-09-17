let cl = console.log;

let arr =[ 10,11,12,13,14,10,12];

let newArr = arr.filter((x,y)=> {

    return arr.indexOf(x) === (y);
})

cl(newArr);