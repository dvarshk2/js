// Object to string Interpolation using es6

var cl=console.log;

var person={
	
	fname:"Tony",
	lname:"stark",
	nickname:"Ironman",
	indu:'stark Industries',
	age:55,
}

var result=`This is ${person.fname} ${person.lname}, ${person.age} years old, 
		popular as ${person.nickname}. owner of ${person.indu}`;
		
cl(result);
 
 var player={
	 fname:'virat',
	 lname:'Kohali',
	 profession:'cricketer',
	 team:'Indian',
	 achievement:'most successful captain till date',
	 age:33
 }
 
 //Hello this is Virat Kohali. 33 years old cricketer by profession.
 //Play for Indian team and most successful captain till date in test cricket.
 
 var result= `Hello this is ${player.fname} ${player.lname}. ${player.age} pears old 
 ${player.profession} by profession. Play for ${person.team} team and ${player.achievement}
 in test cricket.`;
	
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
result=`${person1.fname} ${person1.lname} was a billionaire ${person1.profession} and inventor.
He was the former CEO of ${person1.industry}, a conglomerate originally started by his father,
	${person1.fathername}. He was popular as ${person1.nickname}`;
	
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
