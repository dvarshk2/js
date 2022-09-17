var cl=console.log;

cl('Hello');
//primitive data types/Non-reference/Non-Object
//1.Number 2. String 3. Boolean 4. Undefined 5.null
//primitive data types holds values

var x=10;
var y=x;
cl('value of x =',x);
cl('value of y =',y);

y=20;
cl('value of y =',y);
cl('value of x =',x);

var person={
	fname:'akshay',
	account:'SBI',
	age:29,
}
cl(person);
var person2= person;
cl(person2);

person2.fname='aliya';
cl('value of person2 ',person2);
cl('value of person ',person);

var pers={
	first:'Varshketu',
	last:'Dadhale',
}
cl(pers);
var pers2=pers;
cl(pers2);
pers2.last='Jawlekar';
cl('Value of pers2 ',pers2);
cl('value of pers',pers);

var abc={
	school:'ZPS',
	clg:'Raghunath',
	edu:'diploma',
}

var xyz=abc;

cl(xyz);
cl(abc);

xyz.edu='ITI';
cl('value of xyz',xyz);

cl('value of abc',abc);