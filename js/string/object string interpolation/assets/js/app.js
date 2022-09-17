// Object to string Interpolation

var person={
	//key:value;
	fname:"Tony",
	lname:"stark",
	nickname:"Ironman",
	indu:'stark Industries',
	age:55,
}

console.log(person.fname);
console.log(person.nickname);
console.log(person.age);
console.log(person.indu);
console.log(person.lname);

//to get data/any information from object>> objectName.keyName

console.log(person);

//Get value from Object

var getnickname = person.nickname;
console.log(getnickname);
console.log(person.fname);
console.log(person.age);
//change value of object key

person.age=45;
person.fname="Peter";
person.lname="Parker";
person.nickname="Spiderman";

console.log(person);
console.log(person.age);

//create/Add key and value from outside Object

person.country='US';

console.log(person);

//delete key value pair from Object
delete person.age;
console.log(person);

//Hello there I'm Peter Parker, owner of Stark Industries. people also call me Spiderman. I'm 25 years old and from US.
person.age=25;
console.log(person);

//String Interpolation
var result="Hello there, I'm " + person.fname +" " + person.lname + " owner of " + person.indu + "." + " People also call me " + person.nickname +". "
 + "I'm " +person.age + " years old and from " + person.country+"."
 
 console.log(result);
 document.write(result);// used to get o/p on html page
 
 var player={
	 fname:'virat',
	 lname:'Kohali',
	 profession:'cricketer',
	 team:'Indian',
	 achievement:'most successful captain till date',
	 age:33
 }
 
 //Hello this is Virat Kohali. 33 years old cricketer by profession. Play for Indian team and most successful captain till date in test cricket.
 
 var result= "Hello this is "+ player.fname+" "+player.lname+". "+player.age+" years old "+player.profession+". "+"play for "+player.team+" team and "
	+player.achievement+" in test cricket."
	
	console.log(result);
	document.write(result);
	
//Tony Stark was a billionaire industrialist and inventor.
//He was the former CEO of Stark Industries, 
//a conglomerate originally started by his father, Howard Stark. 
//He was popular as IronMan.
var cl=console.log;
var person1=
{
	fname:"Tony",
	lname:"Stark",
	profession:"industrialist",
	industry:"Stark Industries",
	fathername:"Howard Stark",
	nickname:"IronMan",
}
result=person1.fname+" "+person1.lname+" was a billionaire "+person1.profession+
	" and inventor. He was former CEO of "+person1.industry+", a conglomerate originally started by his father, "
	+person1.fathername+". He was popular as "+person1.nickname;
	
cl(result);

//Steve Rogers is the only living, successful test subject of the Super Soldier Serum developed by Abraham Erskine during World War II, 
//after which the patriotic super soldier became known as Captain America.

var soldier=
{
	fname:"Steve",
	lname:"Rogers",
	profession:"Super Soldier",
	scientist:"Abraham Erskine",
	nickname:"Captain America",
}

result=soldier.fname+" "+soldier.lname+" is the only living, successful test subject of the "+soldier.profession+" serum developed by "+soldier.scientist+
	" during world war II, after which the patriotic "+soldier.profession+" became known as "+soldier.profession+".";
	
cl(result);
document.write(result);
