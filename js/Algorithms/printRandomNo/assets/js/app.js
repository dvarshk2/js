var cl=console.log;

// print random no between 1 to 10
var x= Math.random();
cl(Math.random());

// 0.01*10>>0.1>>ceil>> 1   floor>> 0
// 0.12*10>>1.2>> ceil>> 2    floor >> 1
// 0.22*10>> 2.2>>ceil>>3     floor>>2
// 0.34*10>>3.4>>ceil>>4      floor>>3
// 0.49*10>>4.9>>ceil>>5      floor>>4
// 0.576*10>>5.67>>ceil>>6    floor>>5
// 0.63*10>>6.3>>ceil>>7      floor>>6
// 0.72*10>>7.2>>ceil>>8      floor>>7
// 0.88*10>>8.8>>ceil>>9      floor>>8
// 0.987*10>>9.8>>ceil>>10    floor>>9
        // >>10.4>>ceil>>11    floor>>10
		

var x= Math.ceil(Math.random()*10);
cl(x);

// print random No between 0 to 10
var y=Math.floor(Math.random()*11);
cl(y);

//print random no between 7 to 18

// 7+0.1>>7.1>>ceil>>8  floor>>7
// 7+1.1>>8.1>>ceil>>9  floor>>8
// 7+2.1>>9.1>>ceil>>10  floor>>9


cl(Math.ceil(7+Math.random()*11));//8 to 18 nos printed

cl(Math.floor(7+Math.random()*12));// 7 to 18 nos printed



function printRandomNo(min,max){
	return (Math.floor(min + Math.random()*(max-min+1)));
}

cl(printRandomNo(1,5));
cl(printRandomNo(0,10));
cl(printRandomNo(10,20));