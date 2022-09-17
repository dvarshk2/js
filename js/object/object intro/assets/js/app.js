var cl=console.log;

cl("Object Introduction");

var person={
	//key:value
	fname:"Tony",
	lname:"Stark",
	nickName:"IronMan",
	indu:"Stark Industries",
	age:55,
}

cl(person);
//To get any information /data from object>> objectName.keyname

//get value from object

var getNickName = person.nickName;
cl(getNickName);

cl(person.age);
cl(person.indu);

//Change value of object key
person.age=45;
//cl(person.age);
cl(person);
person.fname="Peter";
person.lname="Parker";
person.nickName="SpiderMan";
person.age=25;

cl(person);

//Add/create key value pair from outside object
person.country="US";

cl(person);

//Remove/delete key value pair of object
delete person.age;
cl(person);

var nndu={
	name:"Nandu",
	spouse:"Shubhangi",
	daughter:"Shubhra",
	bro:"Gajanan",
	anna:"Achyutrao",
	aai:"Aashatai",
}

cl(nndu.name);
cl(nndu.spouse);
cl(nndu.daughter);
cl(nndu.bro);
cl(nndu.anna);
cl(nndu.aai);

nndu.daughter="saee";
cl(nndu);

delete nndu.bro;
cl(nndu);

var gaju={
	name:"Gajanan",
	spouse:null,
	father:"Achyutrao",
	mother:"Aashatai",
}

cl(gaju.name);
cl(gaju.spouse);
cl(gaju.father);
cl(gaju.mother);

gaju.spouse="SandhyaRani";
cl(gaju);

gaju.child="Not decided";
cl(gaju);

var varsh={
	name:"Varshketu",
	spouse:"Gokarna",
	daughter:"Vaidehi",
}
cl(varsh.name);
cl(varsh.spouse);
cl(varsh.daughter);
varsh.nickName="Varsha";
cl(varsh);
varsh.daughternickname="Pari";
cl(varsh); 

var indus={
	company:"Indus Towers Ltd",
	designation:"FSE",
	joining:2014,
	left:2020,
	
}

cl(indus.company);
cl(indus.designation);
cl(indus.joining);
cl(indus.left);

indus.workduration="6 years";
cl(indus);
indus.team="12 Technician's";
cl(indus);