let cl = console.log;

cl(`concatnate string`);

let fname = "Harry";
let lname = "Brusse";
let age =53;

cl(`Age of ${fname} ${lname} is ${age} years`);

function personAge(fname, lname, age){
    cl(`Age of ${fname} ${lname} is ${age} years`);
    alert(`Age of ${fname} ${lname} is ${age} years`);
}

personAge('varsh','ketu','29');
personAge('tony','stark',55)