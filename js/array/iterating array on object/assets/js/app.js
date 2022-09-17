var cl=console.log;

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

for(var stud=0;stud<tutStudent.length;stud++){
	cl(tutStudent[stud].fname);
	cl(tutStudent[stud].lname);
	cl(tutStudent[stud].email);
}

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

for (var vlg=0;vlg<town.length;vlg++){
	cl(town[vlg].name);
	cl(town[vlg].population);
	cl(town[vlg].sarpanch);
	cl(town[vlg].Police);
}