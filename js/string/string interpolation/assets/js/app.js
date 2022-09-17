var cl=console.log;
var greet1= "hello";
var greet2= "World";

var greet= greet1 +" "+ greet2;
cl(greet);
//************example 1 ********
var a ="Hi";
var b ="friends";
var c="How are you";

var d= a+" "+b+", "+c+"?";
cl(d);
//**********Example2**************
var fname=  "Varshketu";
var mname ="Bandurao";
var lname = "Dadhale";
var vlg = "Jawla Bk";
var edu ="Graduate";

// My self Varshketu Bandurao Dadhale, Graduate from jawla Bk.

var result="My self "+fname+" "+mname+" "+lname+", "+edu+" from "+vlg+".";
cl(result);

//**********Example 3 *****************


/*Hari is my schoolmate,BSC graduate willing to develop self in UI Developer.
He is learning HTML, CSS, JavaScript and Angular to become FE Developer.*/

fname= "Hari";
var friend="schoolmate";
edu= "B. Sc";
var ambition="UI Developer";
var learn= "HTML, CSS, JavaScript";
var framework="Angular";
var target="FE Developer"

result=fname+" is my "+friend+", "+edu+" graduate willing to develop career in "+ambition+". "+"He is learning "+learn+" and "
	+framework+" to become "+ target+".";
cl(result);
document.write(result);

//*****************Example4 *************


/*nandu Jawlekar is my cousin. Shubhra is his daughter. Celebrates Her birthday on 11th feb*/
fname="Nandu";
lname="jawlekar";
var neice="Shubhra";
var relation="cousin";
var birthday="11th Feb"
var rel="daughter";

result=fname+" "+lname+" is my "+relation+". "+neice+" is his "+rel+". Celebrates her birthday on "+birthday+".";
cl(result);
document.write(result);

//***************Example 5 *************

var fname="Tony";
var lname="Stark";
var age=50;
var nickName= "IronMan";

//Hello, there i'm Tony Stark, 50 years old. people also call me IronMan.
result= "Hello there I'm "+fname+" "+lname+", "+age+" years old. People also call me "+nickName+"."; 
cl(result);