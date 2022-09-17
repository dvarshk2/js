var cl=console.log;
cl('for loop');

for(var i=0; i<=5;i++){
	cl(i);
}

//print 11 to 20 numbers
for (var i=11;i<=20;i++){
	cl(i);
}

//print even no b/w 11 to 20
cl('print even no b/w 11 to 20');

for(var k=11;k<=20;k++){
	if(k%2===0){
		cl(k);
	}
}

cl('print odd nos b/w 21 to 30');
for (var x=21;x<=30;x++){
	if(x%2!=0){
		cl(x);
	}
}
//print no divisible by 3 & 7 b/w 51 to 100
for(var p=51;p<=100;p++){
	if(p%3===0&&p%7===0){
		cl(p);
	}
}
//print no divisible by 5 or 9 between 101 to 200
cl('no divisible by 5 or 9 between 101 to 200');
for(var r=101;r<=200;r++){
	if((r%5===0)||(r%9===0)){
		cl(r);
	}
}
//print no b/w 1 to 10
for(var i=0; i<=10; i++){
	cl(i);
}

//print no divisible by 3,4 & 6 upto 100
cl('no divisible by 3,4,6');
for (var j=0;j<=100;j++){
	if(j%3===0 && j%4===0 && j%6===0){
		cl(j);
	}
}

cl('no either divisible by 4 or 5 upto 50');
for (var k=0;k<=50;k++){
	if(k%4===0 || k%5===0){
		cl(k);
	}
}