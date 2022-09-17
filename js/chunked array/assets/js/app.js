let cl = console.log;

let ages = [10,20,30,40,50,60,70,80,90];

let arr = ages.slice(0,2);
// cl(arr);
let newArr =[];
newArr.push(arr)
// cl(newArr)

function chunk(arr, arrlength){
    let newArr =[];
    for(i=0; i<arr.length; i + arrlength){
        let slic = arr.slice(i, i + arrlength);
        // cl(slic);
        
        newArr.push(slic);
        // cl(newArr);
        i = i + arrlength;
    } 
    return newArr;   
}
cl(chunk(ages, 2));
cl(chunk(ages, 3));
cl(chunk(ages, 4));