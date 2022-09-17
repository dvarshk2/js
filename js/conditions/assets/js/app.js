var cl=console.log;

cl("conditions");
var x=8;

if(x<10){
	cl("x is less than 10",x);
}

var a=52;
if(a>20){
	cl("a is greater than 20", a);
}

var p=x+a;
if(p>x){
	cl(p," is greater than",x);
}

var q= a-2;
if(q<100){
	cl(q, "less than 100");
}
var b="10";
a=100;
var c= a-b;
cl(c);
if(c>0&&c<200){
	cl("c is in between 2 to 200");
}


// check no is even or odd
cl('If Else examples');
var y=22;
y=85;
if(y%2===0){
	cl("EVEN Number");
}else{
	cl('Its odd no');
}

//check no is divisible by 5

y=95;
if(y%5===0){
	cl('no is divisible by 5');
}else{
	cl('no is not divisible by 5');
}

y=9;
y=12;
if(y>10){
	cl(y," is greater than 10");
}else{
	cl(y, "is less than 10");
}
//check no is divisible by 4,6 or 8

var z=12;
z=18;
z=11;
if(z%4===0){
	cl("No is divisible by 4");
}else if(z%6===0){
	cl("No is divisible by 6");
}else if(z%8===0){
	cl("No is divisible by 8");
}else{
	cl('No is not divisible by 2, 6 or 8');
}

//check prime Number

y=10;
y=11;
y=12;
y=13;
y=14;
y=29;
if(y%2===0){
	cl(y,'is not prime number');
}else if(y%3===0){
	cl(y,'is not prime number');
}else if(y%5===0){
	cl(y,'is not prime number');
}else if (y%7===0){
	cl(y,'is not prime number');
}else {
	cl(y,'prime number');
}