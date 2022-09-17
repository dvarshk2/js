var cl=console.log;

//alert('hello');

//1 past/future date
var pari= new Date(2020,1,14,14,14);
cl(pari);

var k2 =new Date(1991,4,10);
cl(k2);

var k2original=new Date(1991,8,12);
cl(k2original);

var gokul=new Date(1995,6,10);
cl(gokul);
var gokul=new Date(1995,5,10);
cl(gokul);

var gkrn=new Date(1995,9,23);
cl(gkrn);

var har=new Date(2023,3,18,12,4,44);
cl(har);

var gaju=new Date(2022,3,27);
cl(gaju);

//2 current Date

var today=new Date();
cl(today);


//3 by passing milliseconds
var oneday=24*60*60*1000;
cl(oneday);

var varsh=new Date(oneday);
cl(varsh);

var t20day=20*oneday;
var t20de=new Date(t20day);
cl(t20de);

//4 using string value create date object

var d=new Date('september,12,1991,2:12:15');
cl(d);

var h=new Date("may, 17,1992, 20:23:25");
cl(h);
//alert(h);
h=new Date(1992,4,17);
cl(h);
//alert(h);

//get year from date object

var pariYear=pari.getFullYear();
cl(pariYear);

var k2Year=k2.getFullYear();
cl(k2Year);

var gkrnYear=gkrn.getFullYear();
cl(gkrnYear);

var dYear=d.getFullYear();
cl(dYear);

//get month from date Object
var months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var pariMonth=pari.getMonth();
//cl(pariMonth);
cl(months[pariMonth]);
var k2Month=k2.getMonth();
//cl(k2Month);
cl(months[k2Month]);
var gkrnMonth=gkrn.getMonth();
cl(gkrnMonth);
cl(months[gkrnMonth]);
var dMonth=d.getMonth();
cl(dMonth);
cl(months[dMonth]);

//get date from date Object

var k2date=k2.getDate();
cl(k2date);

var paridate=pari.getDate();
cl(paridate);

var gkrndate=gkrn.getDate();
cl(gkrndate);

var dDate=d.getDate();
cl(dDate);

//get hours from date Object
var k2Hrs=k2.getHours();
cl(k2Hrs);

var pariHrs=pari.getHours();
cl(pariHrs);

var gkrnHrs=gkrn.getHours();
cl(gkrnHrs);

var dHrs=d.getHours();
cl(dHrs);

//get minutes

var k2Mins=k2.getMinutes();
cl(k2Mins);

var pariMins=pari.getMinutes();
cl(pariMins);

var gkrnMins=gkrn.getMinutes();
cl(gkrnMins);

var dMins=d.getMinutes();
cl(dMins);

//get seconds

var k2Sec=k2.getSeconds();
cl(k2Sec);

var pariSec=pari.getSeconds();
cl(pariSec);

var gkrnSec=gkrn.getSeconds();
cl(gkrnSec);

var dSec=d.getSeconds();
cl(dSec);

//get milliseconds
var k2Milli=k2.getMilliseconds();
cl(k2Milli);

var pariMilli=pari.getMilliseconds();
cl(pariMilli);

var gkrnMilli=gkrn.getMilliseconds();
cl(gkrnMilli);

var dMilli=d.getMilliseconds();
cl(dMilli);

//get day from date oibject
week=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var k2Day=k2.getDay();
//cl(k2Day);
cl(week[k2Day]);
var pariday=pari.getDay();
//cl(pariday);
cl(week[pariday]);
var gkrnDay=gkrn.getDay();
//cl(gkrnDay);
cl(week[gkrnDay]);
var dDay=d.getDay();
cl(dDay);
cl(week[dDay]);

//get time
var k2Time=k2.getTime();
cl(k2Time);
//getTime()>> it will returns milliseconds since 1 Jan 1970

var pariTime=pari.getTime();
cl(pariTime);

var gkrnTime=gkrn.getTime();
cl(gkrnTime);

var dTime= d.getTime();
cl(dTime);

//getnow>>> it will returns milliseconds from 1 jan 1970 to till time.

var currentMilli= Date.now();
cl(currentMilli);
//Set date, month, year ,hrs,minutes, seconds
var d= new Date();
cl(d);

d.setDate(12);
cl(d);

d.setMonth(8);
cl(d);

d.setFullYear(1991);
cl(d);

d.setHours(14);
cl(d);

d.setMinutes(14);
cl(d);

d.setSeconds(12);
cl(d);

d.setMilliseconds(1200);
cl(d);

var  pari= new Date();

cl(pari);
pari.setDate(14);
cl(pari);

pari.setFullYear(2020);
cl(pari);

pari.setHours(14);
cl(pari);

pari.setMinutes(2);
cl(pari);

var g=new Date();
cl(g);
g.setDate(23);
g.setMonth(9);
g.setFullYear(1995);
cl(g);

var v= new Date("january, 1, 2000");
cl(v);
v.setDate(10);
v.setMonth(4);
v.setFullYear(1991);
cl(v);