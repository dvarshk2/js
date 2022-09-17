var cl=console.log;

var str= "I Love javaScript";

var strLength = str.length;
cl(strLength);

//length>> property>> gives us no of characters avaialable in String

//replace method
var str1 = "I Love Reactjs";
cl("str1 value :",str1);

//replace Reactjs by Angular
var str2 = str1.replace('Reactjs','Angular');
cl("str2 value :",str2);
//above replace example is case sensitive

var st1 = "Do practice regularly";
//replace regularly by daily
var st2 = st1.replace('regularly','Daily');
cl(st2);

var string = "Learning is continuous process";
//replace continuous by Non-Stop
var string2 = string.replace('continuous','Non-Stop');
cl(string2);

var str11 = "Hey how are you?";
//replace Hey by Hello
var str12 = str11.replace('Hey','Hello');
cl(str12);


//RegaX>> regular expression
var str1 = "I Love Reactjs";
var str4 = str1.replace(/reactjs/i, 'Angular');//i>>insensitive & /ABDC/ >> regular expression
cl("str4 value :",str4);

str1 = "I Love Reactjs, because reactjs (reactjs) is not suitable for large applications and reactJs is not framework."
cl(str1);

var str5 = str1.replace(/reactjs/,'Angular');//in this first occurance case sensitive word replaced.
cl(str5);

str5 = str1.replace(/reactjs/i,'Angular');
cl(str5);
//in above example first occurance replaced without considering case sensitivity as i used
str5 = str1.replace(/reactjs/gi,'Angular');
cl(str5); //all words replaced g= globe i= insenitive
//gi position interchanged
str5 = str1.replace(/reactjs/ig,'Angular');
cl(str5);

var st1= "It's computer age. You should learn Computer. COMPUTER is microprocessor";
//replace computer by machine
var st2= st1.replace(/Computer/,'Machine');
cl(st2);
var st2= st1.replace(/computer/i,'Machine');
cl(st2);
var st2= st1.replace(/computer/g,'Machine');
cl(st2);
var st2= st1.replace(/computer/gi,'Machine');
cl(st2);
var str11 ="YOU must be happy. hello how are you?  You are creator of yourself";
var str12 = str11.replace(/you/,'Ravi');
cl(str12);
var str12 = str11.replace(/you/i,'Ravi');
cl(str12);
var str12 = str11.replace(/you/g,'Ravi');
cl(str12);
var str12 = str11.replace(/you/ig,'Ravi');
cl(str12);


//toUpperCase, toLowerCase methods
//its method
str1 = "I Love javaScript";
cl(str1.toUpperCase());

cl(str1.toLowerCase());
//particular word UPPERCASE
str2 = str.replace('javaScript', 'javascript'.toUpperCase());
cl(str2);

var name = "    Myself Varshketu Bandurao Dadhale  ";
cl(name.toUpperCase());
cl(name.toLowerCase());
cl(name.replace('ketu','K2'));
cl(name.replace(/Dadhale/,'Jawlekar'));
cl(name.length);

var frnd = "     Haribhau raut is good person   ";
cl(frnd.toUpperCase());
cl(frnd.toLowerCase());
cl(frnd.replace('raut','Raut'));
cl(frnd.length);

//trim method
//trim()  >> this method cut the space before and after string

var name = "    Myself Varshketu Bandurao Dadhale  ";
cl(name.length);
name1 = name.trim();
cl(name1.length);
if(name1.length==33){
	cl("name1 :" ,name1);
}else{
	cl("name:",name);
}


var frnd = "     Haribhau raut is good person   ";
cl(frnd.trim().length);
if(frnd.trim().length===28){
	cl(frnd.trim());
}else{
	cl(frnd);
}

var greet ="   Good day   ";
cl(greet.length);
cl(greet.trim().length);

//concat method
var greet1 ="Hello ";
var greet2 = "world";
var msg="I Love You very much.";

var greeting = greet1.concat(greet2);
cl(greeting);

var greeting = greet1.concat(greet2, ", How are you?");
cl(greeting);
var greeting = greet1.concat(greet2, ", How are you? ",msg);
cl(greeting);

//Hey, how are you? Hope you are doing well.
var g1="Hey, ";
var g2="how are you?";
var g3=" Hope you are doing well.";
greeting=g1.concat(g2,g3);
cl(greeting);

var req="Please revise session time.";
var time="It should be early morning";
var getUp=" to get up early.";
var benefit=/*After morning session */"whatever taught will be in mind to practice well.";

var request=req.concat(time,getUp," After morning session ",benefit);
cl(request);

//charAt method
//charAt()>> character at index Number
var request="Please revise session time.It should be early morning to get up early.After morning session whatever taught will be in mind to practice well.";

cl(req.charAt(0));
cl(time.charAt(3));
cl(getUp.charAt(8));
cl(getUp.charAt(0));
cl(benefit.charAt(2));
cl(g1.charAt(2));

//indexOf method
//indexOf("string")

var str = "I Love javaScript, because javaScript is feature of web and javaScript having lot of framework like Angular ";

var indexOfjavaScript= str.indexOf("javaScript");
cl(indexOfjavaScript);

var indexOfreact=str.indexOf('react');
cl(indexOfreact);

var indexfeature = str.indexOf('feature');
cl(indexfeature);

var indexOfAngular = str.indexOf("Angular");
cl(indexOfAngular);

var sessionIndex= req.indexOf('session');
cl(sessionIndex);

var morningIndex = time.indexOf('morning');
cl(morningIndex);

var lastindexofjs=str.lastIndexOf('javascript');
cl(lastindexofjs);
var lastindexofjs=str.lastIndexOf('javaScript');
cl(lastindexofjs);
//index of 2nd , 3rd javaScript
var indexOf2ndjavaScript=str.indexOf('javaScript',7+1);
cl(indexOf2ndjavaScript);

var indexOf2ndjavaScript=str.indexOf('javaScript',str.indexOf('javaScript')+1);
cl(indexOf2ndjavaScript);
cl(str.indexOf('javaScript',str.indexOf('javaScript')+1));

var indexof3rdjavaScript=str.indexOf('javaScript',27+1);
cl(indexof3rdjavaScript);

var indexof3rdjavaScript=str.indexOf('javaScript',indexOf2ndjavaScript+1);
cl(str.indexOf('javaScript',indexOf2ndjavaScript+1));
cl(indexof3rdjavaScript);

var str1 = "I love Reactjs ,becoz reactjs is not suitable for large Application and reactjs is not framework";
var indexofReactjs=str1.indexOf('Reactjs');
cl(indexofReactjs);

var indreactjs= str1.indexOf('reactjs');
cl(indreactjs);
var indexof2ndreactjs=str1.indexOf('reactjs',indreactjs+1);
cl(indexof2ndreactjs);

//extracting substring from given string
// Slice, Substring, substring


//slice() method
//string.Slice(start?:no,ens?:no);String
//start >> non mandatory index>> startindex no from which we are going to extract substring
//end>> non mandatory>>end index no upto which we are extracting string
//end index is not included in result string
//can pass negative arguments as well
var str='Apple, Banana, Kiwi ';

var f1=str.slice(7,14);
cl(f1);
var f1=str.slice(7,13);
cl(f1);
var f1=str.slice(7,12);
cl(f1);

var f2=str.slice(7);//if only one i.e start index passed,it will print string from start index to last
cl(f2);

var f2= str.slice(4);
cl(f2);

var f3=str.slice();//if no argument passed, whole string will be printed
cl(f3);

var f4 = str.slice(-8,-1);
cl(f4);

var str1='I Love javaScript';
cl(str1);
var f1 =str1.slice(7,17);
cl(f1);
var f2=str1.slice(7,12);
cl(f2);
var f3=str1.slice(2);
cl(f3);
var f4=str1.slice(7);
cl(f4);
var f5=str1.slice();
cl(f5);

var str2="javaScript is important considering future scope";

var f1= str2.slice(14,35);
cl(f1);

var f2= str2.slice(14);
cl(f2);

var f3= str2.slice();
cl(f3);

var skills="html css js SASS Angular Node js";

var f1=skills.slice(10,18);
cl(f1);

var f2=skills.slice(0,22);
cl(f2);

var f3= skills.slice(12);
cl(f3);

var f4 = skills.slice();
cl(f4);


//substring
//string.substring(start:No, end?:No) :string
//start>>mandatory > included in resultant
//end>>non mandatory>>not included in resultant
//returns string
//does not accept negative arguments
//if argument not passed it will consider first index i.e. 0 as start

var str='Apple, Banana, Kiwi';

var f5=str.substring(7,13);
cl(f5);

var f6=str.substring(7);
cl(f6);
var f6=str.substring(2);
cl(f6);

var f7= str.substring();
cl(f7);

var str1='I Love javaScript';
var f1=str1.substring(7,17);
cl(f1);

var f2 = str1.substring(2);
cl(f2);

var f3=str1.substring();
cl(f3);

var str2="javaScript is important considering future scope";
f1=str2.substring(11,42);
cl(f1);

f2=str2.substring(11);
cl(f2);

f3 = str2.substring();
cl(f3);

f4=str2.substring(-8,-25);
cl(f4);//does not accept negative arguments

var skills="html css js SASS Angular Node js";

f1=skills.substring(5,23);
cl(f1);

f2=skills.substring(5,24);
cl(f2);

f3=skills.substring(8);
cl(f3);

f4=skills.substring();
cl(f4);
cl(skills);


//substr
//string.substr(from:No,length?:No):string
//from>>index no from which we extract substring
//length>>non mandatory>> it defines no of characters
//in es6 version it is deprecated

var str='Apple, Banana, Kiwi';

var f8= str.substr(7,6);
cl(f8);

var f8= str.substr(7,9);
cl(f8);

var f8 = str.substr(7);
cl(f8);
var f8 = str.substr(1);
cl(f8);

var f8 = str.substr();
cl(f8);

var str1='I Love javaScript';
f1=str1.substr(7,15);
cl(f1);
f2=str1.substr(7,8);
cl(f2);
f3=str1.substr(1);
cl(f3);
f4=str1.substr();
cl(f4);


str2="javaScript is important considering future scope";

f1=str2.substr(11,15);
cl(f1);
f2=str2.substr(11,25);
cl(f2);
f3=str2.substr(11);
cl(f3);
f4=str2.substr();
cl(f4);


//convert string into Array

//split method

var skills='HTML5 CSS3 SASS Bootstrap javaScript es6 TypeScript Angular';

var arr=skills.split(' ');
cl(arr);

var str='Apple, Banana, Kiwi';
var newArr = str.split(' ');
cl(newArr);

newArr=str.split('');//if separator not passed, Each letter will be separated in Array
cl(newArr);

newArr=str.split();//whole string will be single element of Array
cl(newArr);

arr=skills.split();//whole string willbe single element of Array
cl(arr); 

var str1='I Love javaScript';
arr=str1.split(' ');//space is separator
cl(arr);

arr=str1.split("");
cl(arr);

// arr=str1.split(', ');
// cl(arr);

arr=str1.split();
cl(arr);


var str2="javaScript ,is important considering ,future scope";

arr=str2.split('');
cl(arr);

arr=str2.split(' ');
cl(arr);

arr=str2.split(',');
cl(arr);

arr=str2.split();
cl(arr);