var cl=console.log;

cl('Hello');

var x=10;//global scope
cl(x);

//scope >> availability and accessibility of any declaration is called scope

function printX(){
	cl(x);
}
printX();

function printY(){
	var y=20;//functional scope
	cl(y);
}
printY();
//cl(y); y is not defined i.e. y is not accessible outside function

var a=x;
cl(a);

function addTwo(){
	var c=x+a;//a & x available n accessible in function as scope is global
	cl(c);
}
addTwo();
//cl(c); c is availabel n accessible outside function so error not defined



















cl(x);









cl(a);