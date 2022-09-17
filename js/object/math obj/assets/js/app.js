var cl= console.log;

// cl('hello');

//object property>> a key whose value is apart from Function

//Object method>> a key whose value is Function

//Math Object properties

var pi= Math.PI;
cl(pi);

var eulers = Math.E;
cl(eulers);

cl(Math.LN10);
cl(Math.LN2);
cl(Math.SQRT1_2);
cl(Math.SQRT2);

//Math Object Methods

//Math.round()

var a=9.8;
cl(Math.round(a));//[10]

var b= 5.4;
cl(Math.round(b));//[5]

cl(Math.round(6.7));
cl(Math.round(6.4));
cl(Math.round(3.7));
cl(Math.round(3.1));
cl(Math.round('ABC'));//NaN

//Math.floor()
var x=9.9;
cl(Math.floor(x));
cl(Math.floor(8.9));
cl(Math.floor(7.8));
cl(Math.floor(6.7));
cl(Math.floor(1.2));
cl(Math.floor(2.2));

//Math.ceil()

x=9.1;
cl(Math.ceil(x));

x=9.1;
cl(Math.ceil(x));
cl(Math.ceil(8.9));
cl(Math.ceil(8.2));
cl(Math.ceil(4.5));
cl(Math.ceil(4.1));

//Math.sign

x=9.9;
cl(Math.sign(x));
x= -9.9;
cl(Math.sign(x));

cl(Math.sign(-56));
cl(Math.sign(-87));
cl(Math.sign(876542));
cl(Math.sign(-8243578));

//Math.pow()
var z = Math.pow(2,2);
cl(z);
z=Math.pow(2,3);
cl(z);

cl(Math.pow(3,2));
cl(Math.pow(4,4));
cl(Math.pow(25,2));
cl(Math.pow(9,3));

//math.sqrt()

cl(Math.sqrt(4));
cl(Math.sqrt(9));
cl(Math.sqrt(625));
cl(Math.sqrt(25));
cl(Math.sqrt(100));
cl(Math.sqrt(500));
cl(Math.sqrt(84));

//Math.abs()
//returns the absolute value of a number(the value without regard to whether it is positive or negative)

cl(Math.abs(-9.9));
cl(Math.abs(87));
cl(Math.abs(-5685));
cl(Math.abs(123));
cl(Math.abs(-657));
cl(Math.abs(5467));
cl(Math.abs(-7654));

//Math.min()
//returns minimum no from given nos

cl(Math.min(2,5,4,32,-12,0,45));
cl(Math.min(-1,-4,-7,-12,-765479,5,0));

//Math.Max()
//find out Maximum no from given Nos

cl(Math.max(9,4,23,65,-12,0,9864,46723,678,21));
cl(Math.max(-12,-1,-123,-897,0));
cl(Math.max(345,367,876,354,98));

//Math.random()
//prints random no between 0 and 1
// 0 is included
// 1 is excluded

var x=Math.random();
cl(x);

cl(Math.random());