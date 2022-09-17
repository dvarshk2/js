var cl=console.log;

cl('Array Methods');
//Array literal

var ages=[15,25,85,45,65,23,78,56];
cl(ages, typeof ages);

var roll=[1,2,3,4,5,6,7,8];
cl(roll, typeof roll);

var names=['vaidehi','pari','Gokarna','varshketu','sandeep'];
cl(names, typeof names);

var skills=['html','HTML5','css','CSS3','javaScript','Angular'];
cl(skills, typeof skills);

//Array constructor method

var newAges= new Array(25,36,56,48,78,56);
cl(newAges, typeof newAges);

var newArr=new Array(25);//will create 25 array holes if no passed in arguments
cl(newArr);

var newarr=new Array('ABCD');
cl(newarr);

var rollNos=new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14);
cl(rollNos);

var family=new Array('Tony','stark','John',"Doe",'Peter',"Parker");
cl(family);

var vlgs = new Array('Jawla Bk','Jawla Kh','barbadi','Purna','Suhagan');
cl(vlgs);

//convert array into String

//join()
var skills=['html','css','javaScript','Angular'];
var str1 = skills.join(', ');
cl(str1);

var str1 =skills.join(' * ');
cl(str1);

str1= skills.join(' | ');
cl(str1);

str1 = skills.join('');//each element will be joined back to back
cl(str1);

str1 = skills.join();//each element will be joined by comma separator
cl(str1);

rollstr=roll.join('#');
cl(rollstr);
rollStr=rollNos.join("*");
cl(rollStr);
var familyStr=family.join(',');
cl(familyStr);
var nameStr=names.join(' ');
cl(nameStr);
var namestr=names.join();
cl(namestr);
var vlgStr=vlgs.join(", ");
cl(vlgStr);

//toString

str1 = skills.toString();//string will be separated by comma
cl(str1);

str2= skills.toString('*');// no effect of separator passed
cl(str2);

vlgStr=vlgs.toString();
cl(vlgStr);

namestr=names.toString('*');
cl(namestr);

rollstr=roll.toString();
cl(rollstr);
rollStr=rollNos.toString();
cl(rollStr);


//pop>> removes last element of Array

var skills=['html','css','javaScript','Angular'];
//skills.pop();
//cl(skills);
var popValue=skills.pop();
cl(popValue);
cl(skills);

ages=[25,45,36,75,84,44,34];
cl(ages);
var popAges=ages.pop();
cl(popAges);
cl(ages);

names=['vaidehi','pari','Gokarna','varshketu','sandeep'];
cl(names);
var popName=names.pop();
cl(popName);
cl(names);

family=['Tony','stark','John',"Doe",'Peter',"Parker"];
cl(family);
var popFamily=family.pop();
cl(popFamily);
cl(family);

vlgs=['Jawla Bk','Jawla Kh','barbadi','Purna','Suhagan'];
cl(vlgs);
var popVlg=vlgs.pop();
cl(popVlg);
cl(vlgs);

rollNos=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
cl(rollNos);
var poprollNos=rollNos.pop();
cl(rollNos);
cl(poprollNos);

//Push>>appends new element to the end of array and returns new length of Array
// skills.push('Angular 13');
// cl(skills);

var newLength= skills.push('Angular 13');
cl(newLength);
cl(skills);

cl(family);
var familylength=family.push('karbhari');
cl(family);
cl(familylength);

cl(vlgs);
var vlgsLength=vlgs.push('Mumbai');
cl(vlgs);
cl(vlgsLength);

cl(names);
var namesLength = names.push('XYZUVW');
cl(namesLength);
cl(names);

cl(rollNos);
var rollnosLength=rollNos.push(14,15,16);
cl(rollNos)
cl(rollnosLength);

//shift, unshift method
//shift>>>first element of array will be removed and returned

var skills=['html','css','javaScript','Angular'];

// skills.shift();//
// cl(skills);

var firstskill=skills.shift();
cl(firstskill);

cl(names);
names.shift();
cl(names);

cl(vlgs);
vlgs.shift();
cl(vlgs);

cl(family);
family.shift();
cl(family);

cl(rollNos);
rollNos.shift();
cl(rollNos);
rollNos.shift();
cl(rollNos);

//unshift>>>element will be added at 0 index and returns length of new array
// skills.unshift('HTML5');
// cl(skills);

var onUnshift = skills.unshift('HTML5');
cl(skills);
cl(onUnshift);

cl(family);
var famUnshift = family.unshift('Nandkishor');
cl(family);
cl(famUnshift);

cl(names);
var nUnshift = names.unshift("Jawlekar");
cl(names);
cl(nUnshift);

cl(vlgs);
var vlgUnshift = vlgs.unshift("Bombay");
cl(vlgs);
cl(vlgUnshift);

cl(rollNos);
var rollUnshift = rollNos.unshift(21,22,23);
cl(rollNos);
cl(rollUnshift)

//create empty array of skills
var arrLength=skills.length;

for (var i=0; i<arrLength;i++){
	skills.pop()
}
cl(skills);

for(var i=0; i<famUnshift;i++){
	family.pop();
}
cl('family arr',family);

for(var k=0;k<nUnshift;k++){
	names.pop();
}
cl('names arr',names);

for (var t=0;t<vlgUnshift;t++){
	vlgs.pop();
}
cl("vlg arr",vlgs);

for(var a=0;a<rollUnshift;a++){
	rollNos.pop();
}
cl('rollNos arr',rollNos);

//other method to empty Array
skills.length=0;
cl('skills Array',skills);

vlgs.length=0;
cl("vlg Array",vlgs);
names.length=0;
cl("names Array",names);
rollNos.length=0;
cl('rollNos Array', rollNos);
family.length=0;
cl('family Array',family);



//concat method
var skill1 = ['html','css','SASS','js','Angular'];
var skill2 = ['Node.js','Express.js','MongoDB'];
var skill3 = ['Soft-skills','Communication'];

var skill=skill1.concat(skill2);
cl(skill);

skill=skill1.concat(skill2,"Git","Postman");
cl(skill);

skill=skill1.concat(skill2,'Git','Postman',skill3);
cl(skill);

ages=[25,45,36,75,84,44,34];
names=['vaidehi','pari','Gokarna','varshketu','sandeep'];
family=['Tony','stark','John',"Doe",'Peter',"Parker"];
vlgs=['Jawla Bk','Jawla Kh','barbadi','Purna','Suhagan'];
rollNos=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
city=['Culcutta','Mumbai','Delhi','Chandigarh'];
var concat1=ages.concat(names,family);
cl(concat1);

var concat2=vlgs.concat("Bombay","Telangana","Hyderabad",city);
cl(concat2);

var concat3=concat2.concat(rollNos);
cl(concat3);

//slice method
//array.slice(start?:No,end?:No):[]
//start>> start index no included in resultant Array
//end>> end index no not included in resultant Array
//both index non mandatory
//accepts -ve arguments
//returns new array
var skill=['html','css','SASS','javaScript','Angular'];

var newskills=skill.slice(2,4);
cl(newskills);

newskills=skill.slice(-4,-2);
cl(newskills);

ages=[25,45,36,75,84,44,34];
names=['vaidehi','pari','Gokarna','varshketu','sandeep'];
family=['Tony','stark','John',"Doe",'Peter',"Parker"];
vlgs=['Jawla Bk','Jawla Kh','barbadi','Purna','Suhagan'];
rollNos=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
city=['Culcutta','Mumbai','Delhi','Chandigarh','pudducherry','tiruanantpuram'];

var newages=ages.slice(2,4);
cl(newages);

var newNames=names.slice(1,5);
cl(newNames);

var newfamily=family.slice(1);
cl(newfamily);

var newVlgs= vlgs.slice();
cl(newVlgs);

var newRollNos=rollNos.slice(3,7);
cl(newRollNos);

var newCity=city.slice(1,5);
cl(newCity);

//Dont copy one array in other directly

var clonedskills=skill;
cl(clonedskills);

clonedskills.pop();
cl(clonedskills);
cl(skill);
//pop() applied on clonedskill Array removes last element of both array means reference copied in cloned Array

var newskills = skill.slice();
cl(newskills);
cl(skill);


newskills.pop();
cl(newskills);//last element removed
cl(skill);

newfamily=family.slice();
newfamily.push('Arpita');
cl(newfamily);
cl(family);

newfamily=family;
newfamily.push('Arpita');
cl(newfamily);
cl(family);

//splice method
//splice >> to remove array element without leaving holes in the Array
//Array<string>.splice(start:No, deletecount?:No):String[]
//Start >> mandatory
//edletecount >> non mandatory
//splice removes element without leaving holes and also add elements
 var skills=['html','css','SASS','javaScript','Angular'];
 skills.splice(2,1);//SASS will be removed
 cl(skills);
 var skills=['html','css','SASS','javaScript','Angular'];
 skills.splice(2,2);//SASS javaScript will be removed
 cl(skills);
 var skills=['html','css','SASS','javaScript','Angular'];
 skills.splice(1);//all elements removed except 0
 cl(skills);
 
rollNos=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
rollNos.splice(3,2);
cl(rollNos)

rollNos=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
rollNos.splice(0);
cl(rollNos);


city=['Culcutta','Mumbai','Delhi','Chandigarh','pudducherry','tiruanantpuram'];
city.splice(3,2);
cl(city); 
newCity=city.slice();
newCity.splice(0,0,"Parbhani","Nanded");
cl(newCity);
cl(city); 

//add elements using splice() method
var skills=['html','css','SASS','javaScript','Angular'];
skills.splice(2,1,'Bootstrap3','Bootstrap4');
cl(skills);

//add element without removing any element
var skills=['html','css','SASS','javaScript','Angular'];
skills.splice(2,0,'Bootstrap3','Bootstrap4');
cl(skills);
var skills=['html','css','SASS','javaScript','Angular'];

skills.splice(2,'Bootstrap3','Bootstrap4');
cl(skills);

//reverse
//reverse the elements in array in place
//this method mutates the array and returns a reference to same array
var skills=['html','css','SASS','javaScript','Angular'];
cl(skills);
var revSkill=skills.reverse();
cl(revSkill);
cl(skills);
ages=[25,45,36,75,84,44,34];
names=['vaidehi','pari','Gokarna','varshketu','sandeep'];
cl(names.reverse());
family=['Tony','stark','John',"Doe",'Peter',"Parker"];
cl(family.reverse());
vlgs=['Jawla Bk','Jawla Kh','barbadi','Purna','Suhagan'];
cl(vlgs.reverse());
rollNos=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
rollNos.reverse();
cl(rollNos);
city=['Culcutta','Mumbai','Delhi','Chandigarh','pudducherry','tiruanantpuram'];
city.reverse();
cl(city);

//sort
//sort elements as per capitalization and alphabates
//returns reference to same Array
var skills=['html','css','SASS','javaScript','Angular'];
var sortedSkill=skills.sort();
cl(sortedSkill);

var skills=['Html','Css','SASS','javaScript','Angular'];
var sortedSkill=skills.sort();
cl(sortedSkill);

var ages=[20,2,15,1,100,156,250,3,352];
var sortedAges=ages.sort();
cl(sortedAges);

ages=[1,11,25,22,28,45,36,75,84,44,2,4,34];
ages.sort();
cl(ages);

names=['vaidehi','pari','Gokarna','gg','varshketu','sandeep'];
names.sort();
cl(names);

family=['Tony','stark','John',"Doe",'Peter',"Parker"];
family.sort();
cl(family);

vlgs=['Jawla Bk','Jawla Kh','barbadi','Purna','Suhagan'];
vlgs.sort();
cl(vlgs);

rollNos=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
rollNos.sort();
cl(rollNos);

city=['Culcutta','Mumbai','Delhi','Chandigarh','pudducherry','tiruanantpuram'];
city.sort();
cl(city);