let cl = console.log;

cl("check no is Even / Odd");

function evenOdd(no){
	if(no % 2===0){
		alert (`Given no is Even`);
		return (`Given no ${no} is Even`);	
	}
	alert (`Given no is Odd`);
	return (`Given no ${no} is Odd`);
	
}
// cl(evenOdd(5));
// cl(evenOdd(6));
cl(evenOdd(-6));
// cl(evenOdd(-11));