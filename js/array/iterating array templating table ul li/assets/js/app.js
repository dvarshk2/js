var cl=console.log;
cl('Iterating Array');

var skills=["HTML","CSS","CSS3","SASS","es6","javaScript","Angular","Node.js"];

//last index no of array >> array.length-1

var skillsLength = skills.length;
cl(skillsLength);

cl(skills[skills.length-1]);

for(var i=0;i<skills.length;i++){
	cl(skills[i]);
}

//Add element in Array
skills[skills.length]='mongoDB';
cl(skills);

//add I Love string before each array element

for(i=0;i<skills.length;i++){
	cl('I Love '+skills[i]);
}

var skill2=["Node.js","Express.js","MongoDB","Angular Universal"];
// for (var i=0;i<skill2.length;i++){
	// cl('Learn '+skill2[i]+' to become fullstack developer.');
// }
var skill2UL=document.getElementById('skill2');
cl(skill2);
//
var skill2result='';

for (var s=0;s<skill2.length;s++){
	skill2result =skill2result+ "<li class='list-group-item'>FullStack Essentials "+skill2[s]+"</li>";
}
skill2UL.innerHTML=skill2result;

var fed=["HTML","CSS","javaScript","Angular"];

// for(var a=0;a<fed.length;a++){
	// cl(fed[a]+" is essential for front End Development");
// }
var fedLength=fed.length;
cl(fedLength);
var fedUL= document.getElementById("fed");
cl(fedUL);
var fedResult='';
for(var f=0; f<fedLength;f++){
	fedResult=fedResult+"<li class='list-group-item'>FED requirements "+fed[f]+"</li>"
}
fedUL.innerHTML=fedResult;

var tution=["Suraj","Sudarshan","Abhi","Bapurao","Anita","Sneha","Chaitanya"]
var tutionUL=document.getElementById('tution');
cl(tutionUL);
var tutResult='';
for (var t=0;t<tution.length;t++){
	tutResult+="<li class='list-group-item'>"+tution[t]+" is HR's student.</li>"
}
tutionUL.innerHTML=tutResult;


// for( var t=0;t<tution.length;t++){
	// cl(tution[t]+" is HR's student.");
// }

var skillSet=document.getElementById('skillset');
cl(skillSet);

var result='';
for (var i=0;i<skillsLength;i++){
	cl(skills[i]);
	result+="<li class='list-group-item'> I Love "+skills[i]+"</li>";
}
skillSet.innerHTML=result;//set result as innerHTML os skillSet declaration

var skillset2=["Node.js","Express.js","MongoDB","Angular Universal"];

var skillSetUL2=document.getElementById("skillset2");
var result1='';
for(j=0;j<skillset2.length;j++){
	result1= result1+"<li class='list-group-item'> I Love "+skillset2[j]+"</li>"
}
skillSetUL2.innerHTML=result1;

var studentInfo=[
	{
		fname:"Tony",
		lname:"Stark",
		nickName:"Ironman",
		contact:12345,
	},
	{
		fname:"Peter",
		lname:"Parker",
		nickName:"SpiderMan",
		contact:67890,
	},
	{
		fname:"Brusse",
		lname:"Wyene",
		nickName:"Batman",
		contact:321654,
	}
]
for (var i=0;i<studentInfo.length;i++){
	cl(studentInfo[i].nickName);
}
//print all values of object in Array

for (var j=0;j<studentInfo.length;j++){
	cl(studentInfo[j].fname);
	cl(studentInfo[j].lname);
	cl(studentInfo[j].nickName);
	cl(studentInfo[j].contact);
}

var info=document.getElementById("info");
cl(info);
var newResult='';
for (var k=0;k<studentInfo.length;k++){
	newResult=newResult+"<tr><td>"+(k+1)+"</td><td>"+studentInfo[k].fname
	+"</td><td>"+studentInfo[k].lname+"</td><td>"+studentInfo[k].nickName
	+"</td><td>"+studentInfo[k].contact+"</td></tr>"
}

info.innerHTML=newResult;

var tutStudent=[
	{
		fname:"Suraj",
		lname:"Kale",
		email:"suraj@kale",
	},
	{
		fname:"Sudarshan",
		lname:"Dadhale",
		email:"suda@nana",
	},
	{
		fname:"Abhi",
		lname:"Bende",
		email:"Abhi@bende",
	},
	{
		fname:"Anita",
		lname:"anita@pawar",
	},
	{
		fname:"Sneha",
		lname:"Kale",
		email:"sneha@kale",
	},
	{
		fname:"Chaitanya",
		lname:"buchale",
		email:"chaitan@buchale",
	}
]

var tutTable=document.getElementById('tutStud');
cl(tutTable);
var ttResult='';
for( var tut=0;tut<tutStudent.length;tut++){
	ttResult+="<tr><td>"+(tut+1)+"</td><td>"+tutStudent[tut].fname+"</td><td>"
	+tutStudent[tut].lname+"</td><td>"+tutStudent[tut].email+"</td></tr>"
}
tutTable.innerHTML=ttResult;

var town=[
	{
		name:"Jawla Bk",
		population:2500,
		sarpanch:"ABC",
		Police:"abc",
	},
	{
		name:"Jawla Kh",
		population:1000,
		sarpanch:"XYZ",
		Police:"Ashroba",
	},
	{
		name:"Degaon",
		population:4680,
		sarpanch:"Madhav ing",
		Police:"Raosaheb",
	},
	{
		name:"suhagan",
		population:3260,
		sarpanch:"Balaji",
		Police:"Babu",
	}
]

var towndetails=document.getElementById("vlgDetails");
cl(towndetails);
var vlgResult='';
for( var v=0;v<town.length;v++){
	vlgResult+="<tr><td>"+(v+1)+"</td><td>"+town[v].name+"</td><td>"+town[v].population+
	"</td><td>"+town[v].sarpanch+"</td><td>"+town[v].Police+"</td></tr>"
}

towndetails.innerHTML=vlgResult;