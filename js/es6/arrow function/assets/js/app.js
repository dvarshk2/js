var cl=console.log;

//function add two nos

function add(a,b){
	//cl(a+b);
	return( a+b);
}
//add(92,3);
cl(add(91,2));

//arrow function
var add=(a,b)=>{
	return a+b;
}
cl(add(1,1));
cl(add(3,5));



var makeDouble=(x)=>{
	return x*2;
}

cl(makeDouble(5));
cl(makeDouble(8));

//If you have only one parameter, there is no need to use()

var triple=a=>{
	return a*3;
}
cl(triple(9));
cl(triple(10));

//if function having only one statement with return keyword
//we can avoid {} and return keyword

var dodouble=a=>a*2;
cl(dodouble(10));
cl(dodouble(5));

//one parameter-- omit()
//one statement with return keyword-- omit{}
var add1=(a,b)=>a+b;
cl(add1(5,6));
cl(add1(4,69));

var evenNo=(min,max)=>{
	for(var i=min;i<=max;i++){
		if(i%2===0){
			cl(i);
		}
	}
}
evenNo(1,10);
evenNo(25,30);

//we can not use arrow function inside a method in object 
//because in arrow function this keyword always points to window object

var person={
	fname:'Tony',
	lname:'Stark',
	fullname:()=>{
		//cl(this);
		return `${fname} ${lname}`;
	}
}

// cl(person.fullname());

var add3=(a,b,c)=>a+b+c;
cl(add3(1,2,3));

var substract=(a,b)=>a-b;
cl(substract(9,8));

var multi=(a,b,c)=>a*b*c;
cl(multi(1,2,3));
cl(multi(2,3,4));

//print odd nos
var oddNo=(start,end)=>{
	for(var i=start;i<=end;i++){
		if(i%2!=0){
			cl(i);
		}
	}
}

oddNo(1,5);
oddNo(11,20);

//print nos divisible by 5 and 2 upto 50

var nos=(start,end)=>{
	for (var i=start;i<=end;i++){
		if(i%2===0 && i%5===0){
			cl(i);
		}
	}
}
nos(1,10);
nos(10,100);

var skills=['html','css3','javaScript','Angular'];

skills.forEach(function(skill){
	cl(`I Love ${skill}`);
});

skills.forEach(skill=> cl(`I Love ${skill}`));
//for single parameter skill () removed, for single statement {} removed