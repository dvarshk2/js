console.log('Hello');

var cl=console.log;

var x=10;
var y=20;
var z= x+y;
cl(z);

var a=100;
var b=200;
var result=a+b;
cl(result);

function addTwoNo(x,y){
	var z=x+y;
	cl(z);
}
//function is keys
//addTwoNo is name of function
//x,y >>parameters of function. it is self declaration of function

//function>> It is relation between input and output

//arguments>>actual values we pass in () while calling function i.e.25,25,10,12,100,0
addTwoNo(25,25);
addTwoNo(10,12);
addTwoNo( 12 , 12);
addTwoNo(1000,);

function addThrNo(a,b,c){
	var result=a+b+c;
	cl(result);
}
addThrNo(10,20,30);
addThrNo(40,50,60);
addThrNo(70,80,90);
addThrNo(10,11,);

//multiply two nos

function multiTwo(a,b){
	var c=a*b;
	cl(c);
}
multiTwo(5,4);

//divide two No

function divTwo(x,y){
	var p=x/y;
	cl(p);
}

divTwo(10,5);
divTwo(100,10);
divTwo(50,4);

//function without parameters

function printName(){
	cl("My name is Bond, James Bond");
}
printName();
printName();
printName();
//printName(ketu);
function harry(){
	cl('This is Hari, Hari Raut');
}
harry();
harry();
harry();

//function with parameter
function newName(name){
	cl(name +" nam to suna hi hoga");
}

newName('Ravi');
newName('Ramesh');

function jsReq(name){
	cl(name +" is in javaScript syllabi.");
}
jsReq("array");
jsReq('es6');
jsReq('algorithm');

//cl(p); value is not accessible outside function

//function with return keyword
function addtwoNum(x,y){
	return x+y;
}
var getAdd = addtwoNum(10,20);
cl(getAdd);

//using return keyword will get result outside function
//function called one time , value used multiple times
//alert(getAdd);
document.write(getAdd);

var get1Add = addtwoNum(12,13);
cl(get1Add);
document.write(get1Add);

function newName2(){
	return "my name is Bond, James Bond";
}

var getname2=newName2();
cl(getname2);
document.write(getname2);

function prtName(ele){
	return ele + " nam suna nahi kya";
}

var ketu=prtName('Varshketu');
cl(ketu);
var hri = prtName('Haribhau');
cl(hri);
document.write(ketu);
document.write(hri);