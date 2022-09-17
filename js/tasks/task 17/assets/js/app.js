let cl = console.log;

let num = [10,12,87,65,99];

function firstLast(ele){
    alert(`First Value: ${ele.shift()}, Last Value: ${ele.pop()}`)
}

cl(firstLast(num));

let names = ['Hari','Varshk2','Akshay','Deepak','Datta','Gajanan'];
cl(firstLast(names));