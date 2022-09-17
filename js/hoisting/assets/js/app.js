console.log("Hello");
var x=10;
console.log	(x);//[10]
var y;
console.log(y);//[undefined]
//undefined>>declaration is defined but value not assigned to it.

console.log(z);//[z is not defined]
var z;
//not defined >> declaration is not defined yet

console.log(a);

var a=10;

//Hoisting >>> ALl the declarations in our scope will get shifted at the top of scope
//this process is called hoisting

console.log(a); 

console.log("Hello");

console.log(Hello);

var Hello;