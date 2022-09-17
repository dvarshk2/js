var cl=console.log;

cl('Factory Vs Constructor');

//factory Function

function createStudent(firstName, lastName, email, contact){
	var obj={};
	obj.fname=firstName;
	obj.lname=lastName;
	obj.email=email;
	obj.contact=contact;
	return obj;
}
cl(createStudent);
//in above example firstName, lastName, email, contact these are called parameters

var firstStudent=createStudent("Peter", 'Parker', 'peter@parker', '12345678');
cl(firstStudent);

var secondStudent= createStudent("Tony", "Stark", "tony@stark", "87654321");
cl(secondStudent);

var thirdStudent= createStudent("John", "Doe", "john@doe", "123123123");
cl(thirdStudent);

//********Example 1********

function createPerson(first, middle, last, age){
	obj={};
	obj.fname=first;
	obj.lname=last;
	obj.mname=middle;
	obj.age=age;
	return obj;
}
cl(createPerson);

var firstPerson=createPerson("Babarao", "Munjaji", "Lohat", "30");
cl(firstPerson);

var secPerson= createPerson("Haribhau", "Venkat", "Jawla", "35");
cl(secPerson);

//********** example2 ****************
function crTown(town, population, sarpanch, patil){
	obj={};
	obj.town=town;
	obj.pop=population;
	obj.sarpanch=sarpanch;
	obj.police=patil;
	return obj;
}

var town1= crTown("Jawla Bk", "2500", "Bharat", "Lohat");
cl(town1);

var town2= crTown("Degaon", "5420","madhav", "ingole");
cl(town2);

//************Example3 *************

function family(father, mother, daughter, son){
	obj={};
	obj.fname=father;
	obj.name=mother;
	obj.s=son;
	obj.d=daughter;
	return obj;
}

var family1= family("Varshketu", "Gokarna",null,"vaidehi");
cl(family1);

//*********Example 4 ***********

function student(name,age,email,contact){
	obj={};
	obj.stu=name;
	obj.ag=age;
	obj.mail=email;
	obj.contact=contact;
	return obj;
}

cl(student("hari",30,"hari@email",12345678)); 

//**********Example 5 ****************

function company(name,establishment,employeeNo){
	obj={};
	obj.compny=name;
	obj.establish=establishment;
	obj.employee=employeeNo;
	return obj;
}
cl(company("GS Lab",2008,132));

//constructor

function CreateStudentConstructor(firstName,lastName,email,contact){
	//var this={};
	this.fname=firstName;
	this.lname=lastName;
	this.email=email;
	this.contact=contact;
	//return this;
}

var thirdStudent=new CreateStudentConstructor("Brusse","wyene","busse@wyene",123456);
cl(thirdStudent);

var fourthStudent= new CreateStudentConstructor("Gangadhar","Shastri","gangadhar@shastri",654321);
cl(fourthStudent);

//first letter of constructor name must be capital. else erron NOT Defined
//constructor should be called with keyword new. Else error UNDEFINED

//********example 1************
function Person(firstName,middleName,lastName,age){
	this.fname=firstName;
	this.lname=lastName;
	this.mname=middleName;
	this.no=age;
}
var person1=new Person("Varshketu","Bandurao","Dadhale",30);
cl(person1);

var person2=new Person("Haribhau","Munjaji","Raut",29);
cl(person2);

//************example2***************
function Student(fname,lname,email,contact){
	this.firstName=fname;
	this.lastName=lname;
	this.Email=email;
	this.Contact=contact;
}

var person1= new Person("Gajanan","Dadhale","gaju@ranipaspassa",12345678);
cl(person1);

person2 =new Person("Varshketu","Dadhale","k2@dadhale",098765432);
cl(person2);

//********example 3*********
function Town(name,population,sarpanch,patil){
	this.vlg=name;
	this.pop=population;
	this.sarpanch=sarpanch;
	this.police=patil;
}

var town1= new Town("Jawla Bk",2500,"Bharat","Babarao");
cl(town1);

var town2= new Town("Suhagan",3450,"Balaji","Bhosle");
cl(town2);

//*********example 4***********
function Constructor(fname,lname,age,contact){
	this.fname=fname;
	this.lname=lname;
	this.age=age;
	this.contact=contact;
}

var const1= new Constructor("Jawlekar","Vaidehi",2,123654);
cl(const1);

var const2= new Constructor("John","Doe",34,98765478);
cl(const2);

//**********example 5************

function Details(name,education,age,contact){
	this.name=name;
	this.edu=education;
	this.age=age;
	this.cont=contact;
}
cl(new Details("varsh","BE",30,12345));

cl(new Details("ketu","BSc Comp",34.787867));
//cl(Details("ketu","BSc Comp",34.787867));
cl(new details("ketu","BSc Comp",34.787867));