let cl = console.log;

// object create
//literal, new object , factory and constructor

//literal 

let obj1 = {
    property1 : 'value1',
}
cl(obj1);

let obj2 = new Object();
cl(obj2);
//factory function

function person(fname, lname, email){
    let obj = {
        fname: fname,
        lname: lname,
        email: email,
    }
    return obj;
}
let p1 = person('John', 'Doe', 'john@gmail.com');
cl(p1);
let p2 = person('hari', 'raut', 'hari@gmail.com');
cl(p2);

//constructor function

function CreatePerson(fn, ln, email){
    this.fname = fn;
    this.lname = ln;
    this.email = email;
}

let p3 = new CreatePerson('July', 'Doe', 'July@gmail.com');
cl(p3);

let p4 = new CreatePerson('Adi', 'Dadhale', 'adi@nyper.com');
cl(p4);

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        cl('Draw');
    }
}

const c1 = new Circle(10);
cl(c1);

cl(Circle.name);
cl(Circle.length);
cl(Circle.constructor);
// obj.keyname << like object


cl(p1.fname);