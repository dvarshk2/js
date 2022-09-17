let cl = console.log;

let person = {
    name : 'John',
};

cl(person);
//cl(person.toString());// toString method work on person obj in console
//but when we find keys available in person object we won't get "toString" as a key.
//Reason- predefined attribute value of toString key
//find keys available in person object
//1. cl(Object.keys(person)); //keys in the form of Array
for(let key in person){
    cl(key);
}
//prototype of person
let objectBase = Object.getPrototypeOf(person);
cl(objectBase);

//now get description of toString property
let des = Object.getOwnPropertyDescriptor(objectBase, 'toString');
cl(des);

Object.defineProperty(person, 'name', {
    writable: false, // By default value : true
    enumerable: false,
    configurable: false,
})

person.name ='Pari';
cl(person); // if writable: false, reassign name not possible

cl(Object.keys(person));// enumerable:false , won't get array of keys, get empty array

delete person.name;//configurable:false , can't delete name key
cl(person);

let personNameDes= Object.getOwnPropertyDescriptor(person, 'name');
cl(personNameDes)